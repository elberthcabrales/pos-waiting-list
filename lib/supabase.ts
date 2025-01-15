import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const submitEmail = async (email: string) => {
  const { data, error } = await supabase
  .from('emails')
  .insert([
    { address: email},
  ])
  if (error) {
    throw error;
  }
};