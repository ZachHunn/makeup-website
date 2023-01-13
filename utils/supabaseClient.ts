import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = process.env.SUPABASE_URL as string;
export const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
