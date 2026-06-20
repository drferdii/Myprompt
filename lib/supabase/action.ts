// Classy CTE V2 — Supabase Server Action / Route Handler Client (read/write cookies)
// Use in Server Actions and Route Handlers for mutations

import { createServerClient } from "@supabase/ssr"
import type { CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function createSupabaseActionClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Called from Server Component — ignore
          }
        },
      },
    }
  )
}
