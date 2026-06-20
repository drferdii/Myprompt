// Classy CTE V2 — Supabase Browser Client
// Use in Client Components

import { createBrowserClient } from "@supabase/ssr"

export function createSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
