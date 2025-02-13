import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lgleqcufjglqijreqget.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnbGVxY3VmamdscWlqcmVxZ2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzOTk2NzgsImV4cCI6MjA1NDk3NTY3OH0.J8dIzBi-Edabh5StMdsZLgGYOykGNkq0zeQPz7htzVg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
