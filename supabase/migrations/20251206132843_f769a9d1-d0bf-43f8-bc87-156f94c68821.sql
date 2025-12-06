-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Service role can read all quotes" ON quote_submissions;

-- Create a new policy that only allows service_role to read quotes
-- This ensures only backend/edge functions using service_role key can access the data
CREATE POLICY "Only service role can read quotes"
ON quote_submissions
FOR SELECT
TO service_role
USING (true);