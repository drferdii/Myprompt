// Classy CTE V2 — Welcome Email
// Sent once after new user is created in Prisma via /api/auth/callback
// Fire-and-forget: failures are logged but never break the registration flow

import { Resend } from 'resend'
import { buildWelcomeHtml } from './templates/welcome'

const FROM = process.env.RESEND_FROM_EMAIL ?? 'Classy <noreply@classy.com>'

function buildWelcomePlainText(name: string): string {
  const displayName = name || 'Sobat Classy'
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.classy.com'
  return [
    `Selamat datang, ${displayName}!`,
    '',
    'Akun Classy CTE kamu sudah aktif. Mulai optimalkan prompt kamu di:',
    `${appUrl}/optimizer`,
    '',
    'Fitur yang tersedia:',
    '- Prompt Optimizer: Ubah ide kasar jadi super-prompt terstruktur',
    '- Prompt Evaluator: Skor kualitas prompt dengan feedback spesifik',
    '- Template Library: Ratusan template siap pakai',
    '',
    'Kamu menerima email ini karena baru mendaftar di Classy CTE.',
    'Jika bukan kamu yang mendaftar, abaikan email ini.',
    '',
    `Berhenti berlangganan: ${appUrl}/unsubscribe`,
  ].join('\n')
}

export async function sendWelcomeEmail(email: string, name: string | null): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    // Silently skip in dev if not configured
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.classy.com'

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Selamat datang di Classy CTE ⚡',
    html: buildWelcomeHtml(name ?? ''),
    text: buildWelcomePlainText(name ?? ''),
    headers: {
      // Required by Gmail/Yahoo bulk sender rules (enforced Feb 2024) + GDPR/CAN-SPAM
      'List-Unsubscribe': `<${appUrl}/unsubscribe?email=${encodeURIComponent(email)}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    },
  })
}
