// lib/supabase.ts
import { createBrowserClient } from '@supabase/ssr'

export const supabase = function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )
}