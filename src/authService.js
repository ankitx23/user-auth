import { supabase } from './supabaseClient';

// Sign up user
export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

// Login user
export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user, error };
};

// Logout user
export const signOut = async () => {
  await supabase.auth.signOut();
};

// Reset password
export const resetPassword = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  return { data, error };
};
