import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eyblcoefgnhhzgcopbhv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5Ymxjb2VmZ25oaHpnY29wYmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NDkzOTEsImV4cCI6MjA1MDEyNTM5MX0.im0ozd7lKf6YD-GtReYuP8S8b2C37TfSQsqLE2rx2ec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
