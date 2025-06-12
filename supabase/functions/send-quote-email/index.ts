
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { quoteData } = await req.json();

    console.log('Received quote data:', quoteData);

    // Store the quote submission in the database
    const { data: submission, error: dbError } = await supabaseClient
      .from('quote_submissions')
      .insert({
        name: quoteData.name,
        email: quoteData.email,
        company: quoteData.company,
        phone: quoteData.phone,
        service_type: quoteData.serviceType,
        source_language: quoteData.sourceLanguage,
        target_language: quoteData.targetLanguage,
        word_count: quoteData.wordCount,
        deadline: quoteData.deadline || null,
        budget: quoteData.budget,
        message: quoteData.message,
        file_names: quoteData.fileNames || []
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

    const emailHtml = `
      <h2>New Quote Request from LinguaSolutions</h2>
      <p><strong>Submission ID:</strong> ${submission.id}</p>
      <p><strong>Submitted on:</strong> ${new Date(submission.created_at).toLocaleDateString()}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${quoteData.name}</p>
      <p><strong>Email:</strong> ${quoteData.email}</p>
      <p><strong>Company:</strong> ${quoteData.company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${quoteData.phone || 'Not provided'}</p>
      
      <h3>Service Details</h3>
      <p><strong>Service Type:</strong> ${quoteData.serviceType}</p>
      <p><strong>From Language:</strong> ${quoteData.sourceLanguage}</p>
      <p><strong>To Language:</strong> ${quoteData.targetLanguage}</p>
      <p><strong>Word Count:</strong> ${quoteData.wordCount || 'Not specified'}</p>
      <p><strong>Deadline:</strong> ${quoteData.deadline || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${quoteData.budget || 'Not specified'}</p>
      
      <h3>Project Description</h3>
      <p>${quoteData.message || 'No additional details provided'}</p>
      
      ${quoteData.fileNames && quoteData.fileNames.length > 0 ? `
        <h3>Uploaded Files</h3>
        <ul>
          ${quoteData.fileNames.map((fileName: string) => `<li>${fileName}</li>`).join('')}
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
        subject: `New Quote Request from ${quoteData.name}`,
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
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
