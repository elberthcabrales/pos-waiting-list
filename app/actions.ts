'use server';

import { supabase } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function submitToWaitlist(formData: FormData) {
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return { error: 'Email is required' };
  }

  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (error) throw error;

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Failed to submit email' };
  }
}