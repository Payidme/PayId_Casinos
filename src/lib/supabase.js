
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dtmjtmpziidzfuwdcngo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0bWp0bXB6aWlkemZ1d2RjbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NTM5NTgsImV4cCI6MjA1OTMyOTk1OH0.7yBQpBF9IYeRiaGfsNMWuyOMfJZiES-nd00Uu2-DamE';

export const supabase = createClient(supabaseUrl, supabaseKey);
