/*
  # Add digital signatures and blog management

  1. Updates
    - Add signature_limit to profiles
    - Add subscription_price to profiles
    - Add show_ads to profiles
    
  2. New Tables
    - `digital_signatures`
      - Track digital signatures made by users
    - `certificates`
      - Store user certificates for digital signatures
*/

-- Add new columns to profiles
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS signature_limit integer DEFAULT 10,
ADD COLUMN IF NOT EXISTS subscription_price decimal(10,2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS show_ads boolean DEFAULT true;

-- Create digital_signatures table
CREATE TABLE IF NOT EXISTS digital_signatures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  document_name text NOT NULL,
  signature_date timestamptz DEFAULT now(),
  certificate_used uuid,
  created_at timestamptz DEFAULT now()
);

-- Create certificates table
CREATE TABLE IF NOT EXISTS certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  certificate_data text NOT NULL,
  certificate_name text NOT NULL,
  expiry_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE digital_signatures ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Policies for digital_signatures
CREATE POLICY "Users can view their own signatures"
  ON digital_signatures
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create signatures"
  ON digital_signatures
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Policies for certificates
CREATE POLICY "Users can view their own certificates"
  ON certificates
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can manage their certificates"
  ON certificates
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

-- Add admin role to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS is_admin boolean DEFAULT false;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid()
    AND is_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Update blog_posts policies to allow admin access
DROP POLICY IF EXISTS "Authors can CRUD own posts" ON blog_posts;

CREATE POLICY "Admins can manage all posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (
    is_admin() OR 
    (author_id = auth.uid())
  );