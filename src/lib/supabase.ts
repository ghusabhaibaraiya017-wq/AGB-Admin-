import { createClient } from '@supabase/supabase-js'

// Supabase publishable key is designed for use in browser applications.
// Authorization is enforced by Supabase Auth and Row Level Security policies.
const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined)
  || 'https://warduymbxwgzzldcchwb.supabase.co'
const key = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined)
  || 'sb_publishable_KO0Fsc6IEIoqvbuy7_EfVg_XLSPKOBL'

export const supabase = createClient(url, key)
