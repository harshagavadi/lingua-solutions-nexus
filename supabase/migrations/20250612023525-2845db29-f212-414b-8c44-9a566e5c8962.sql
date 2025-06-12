
-- Create a table to store quote submissions
CREATE TABLE public.quote_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service_type TEXT NOT NULL,
  source_language TEXT NOT NULL,
  target_language TEXT NOT NULL,
  word_count TEXT,
  deadline DATE,
  budget TEXT,
  message TEXT,
  file_names TEXT[], -- Array to store uploaded file names
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional - allows public submissions)
ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote submissions (public form)
CREATE POLICY "Anyone can submit quotes" 
  ON public.quote_submissions 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create policy to allow service role to read all submissions (for admin access)
CREATE POLICY "Service role can read all quotes" 
  ON public.quote_submissions 
  FOR SELECT 
  TO service_role
  USING (true);
