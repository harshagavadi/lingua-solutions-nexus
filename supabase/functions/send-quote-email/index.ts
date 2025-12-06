import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schema
const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email format").max(255, "Email too long"),
  phone: z.string().max(30, "Phone number too long").optional().nullable(),
  company: z.string().max(200, "Company name too long").optional().nullable(),
  message: z.string().max(5000, "Message too long").optional().nullable(),
  serviceType: z.string().min(1, "Service type required").max(50, "Service type too long"),
  sourceLanguage: z.string().min(1, "Source language required").max(50, "Language too long"),
  targetLanguage: z.string().min(1, "Target language required").max(50, "Language too long"),
  wordCount: z.string().max(20, "Word count too long").optional().nullable(),
  budget: z.string().max(50, "Budget too long").optional().nullable(),
  deadline: z.string().max(50, "Deadline too long").optional().nullable(),
  fileNames: z.array(z.string().max(255)).max(10).optional().nullable()
});

// Rate limit configuration
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

// HTML escape function to prevent XSS in email content
function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get client IP for rate limiting
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';
    
    console.log('Request from IP:', clientIP);

    // Check rate limit
    const oneHourAgo = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
    const { count, error: rateLimitError } = await supabaseClient
      .from('rate_limits')
      .select('*', { count: 'exact', head: true })
      .eq('ip_address', clientIP)
      .eq('endpoint', 'send-quote-email')
      .gte('created_at', oneHourAgo);

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
      // Continue anyway - don't block legitimate requests due to rate limit table issues
    }

    if (count !== null && count >= MAX_REQUESTS_PER_WINDOW) {
      console.log(`Rate limit exceeded for IP: ${clientIP}, count: ${count}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Rate limit exceeded. Please try again later.' 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 429,
        }
      );
    }

    // Record this request for rate limiting
    const { error: recordError } = await supabaseClient
      .from('rate_limits')
      .insert({
        ip_address: clientIP,
        endpoint: 'send-quote-email'
      });

    if (recordError) {
      console.error('Failed to record rate limit:', recordError);
      // Continue anyway - don't block legitimate requests
    }

    const { quoteData } = await req.json();
    console.log('Received quote data for validation');

    // Validate input data
    const validationResult = quoteSchema.safeParse(quoteData);
    
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message
      }));
      console.log('Validation failed:', errors);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Validation failed',
          details: errors 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    const validated = validationResult.data;
    console.log('Validation passed for:', validated.email);

    // Store the quote submission in the database
    const { data: submission, error: dbError } = await supabaseClient
      .from('quote_submissions')
      .insert({
        name: validated.name,
        email: validated.email,
        company: validated.company || null,
        phone: validated.phone || null,
        service_type: validated.serviceType,
        source_language: validated.sourceLanguage,
        target_language: validated.targetLanguage,
        word_count: validated.wordCount || null,
        deadline: validated.deadline || null,
        budget: validated.budget || null,
        message: validated.message || null,
        file_names: validated.fileNames || []
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save quote submission');
    }

    console.log('Quote saved to database:', submission.id);

    // Send email using Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    // HTML-escape all user data before interpolating into email
    const emailHtml = `
      <h2>New Quote Request from LinguaSolutions</h2>
      <p><strong>Submission ID:</strong> ${escapeHtml(submission.id)}</p>
      <p><strong>Submitted on:</strong> ${new Date(submission.created_at).toLocaleDateString()}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(validated.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(validated.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(validated.company) || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${escapeHtml(validated.phone) || 'Not provided'}</p>
      
      <h3>Service Details</h3>
      <p><strong>Service Type:</strong> ${escapeHtml(validated.serviceType)}</p>
      <p><strong>From Language:</strong> ${escapeHtml(validated.sourceLanguage)}</p>
      <p><strong>To Language:</strong> ${escapeHtml(validated.targetLanguage)}</p>
      <p><strong>Word Count:</strong> ${escapeHtml(validated.wordCount) || 'Not specified'}</p>
      <p><strong>Deadline:</strong> ${escapeHtml(validated.deadline) || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${escapeHtml(validated.budget) || 'Not specified'}</p>
      
      <h3>Project Description</h3>
      <p>${escapeHtml(validated.message) || 'No additional details provided'}</p>
      
      ${validated.fileNames && validated.fileNames.length > 0 ? `
        <h3>Uploaded Files</h3>
        <ul>
          ${validated.fileNames.map((fileName: string) => `<li>${escapeHtml(fileName)}</li>`).join('')}
        </ul>
      ` : ''}
      
      <hr>
      <p><em>This quote request was submitted through the LinguaSolutions website.</em></p>
    `;

    console.log('Sending email...');

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'LinguaSolutions <onboarding@resend.dev>',
        to: ['mrbeastofficial94@gmail.com'],
        subject: `New Quote Request from ${escapeHtml(validated.name)}`,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error('Email sending error:', emailError);
      throw new Error('Failed to send email');
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return new Response(
      JSON.stringify({ 
        success: true, 
        submissionId: submission.id,
        emailId: emailResult.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in send-quote-email function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'An error occurred processing your request. Please try again.' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
