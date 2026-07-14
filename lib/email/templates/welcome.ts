/**
 * Welcome email templates for Classy CTE.
 *
 * Strict English is used for all comments and documentation.
 */

/**
 * Builds the HTML content for the welcome email.
 *
 * @param name - The name of the user or empty string/null.
 * @returns HTML string.
 */
export function buildWelcomeHtml(name: string): string {
  const displayName = name || 'Sobat Classy'

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Selamat Datang di Classy CTE</title>
</head>
<body style="margin:0;padding:0;background-color:#0d0d0d;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d0d;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color:#111111;border-radius:12px;border:1px solid #222222;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid #1a1a1a;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#eb5939;border-radius:8px;padding:8px 10px;margin-right:12px;">
                    <span style="color:#ffffff;font-size:16px;font-weight:700;">⚡</span>
                  </td>
                  <td style="padding-left:12px;">
                    <span style="color:#b7ab98;font-size:18px;font-weight:700;letter-spacing:-0.3px;">Classy CTE</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <h1 style="color:#f0ebe3;font-size:24px;font-weight:700;margin:0 0 12px;letter-spacing:-0.5px;">
                Selamat datang, ${displayName}! 🎉
              </h1>
              <p style="color:#b7ab98;font-size:15px;line-height:1.7;margin:0 0 24px;">
                Akun Classy CTE kamu sudah aktif. Kamu sekarang bisa mulai mengoptimalkan prompt dan mendapatkan hasil yang lebih baik dari AI manapun.
              </p>

              <!-- Feature list -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#161616;border-radius:8px;margin-bottom:8px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#eb5939;font-size:14px;padding-right:12px;">⚡</td>
                        <td style="color:#b7ab98;font-size:14px;line-height:1.5;">
                          <strong style="color:#f0ebe3;">Prompt Optimizer</strong> — Ubah ide kasar jadi super-prompt terstruktur
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#161616;border-radius:8px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#eb5939;font-size:14px;padding-right:12px;">📊</td>
                        <td style="color:#b7ab98;font-size:14px;line-height:1.5;">
                          <strong style="color:#f0ebe3;">Prompt Evaluator</strong> — Skor kualitas prompt dengan feedback spesifik
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:6px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#161616;border-radius:8px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="color:#eb5939;font-size:14px;padding-right:12px;">📚</td>
                        <td style="color:#b7ab98;font-size:14px;line-height:1.5;">
                          <strong style="color:#f0ebe3;">Template Library</strong> — Ratusan template siap pakai untuk berbagai kebutuhan
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.classy.com'}/optimizer"
                       style="display:inline-block;background-color:#eb5939;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:-0.2px;">
                      Mulai Sekarang →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #1a1a1a;">
              <p style="color:#555555;font-size:12px;line-height:1.6;margin:0;text-align:center;">
                Kamu menerima email ini karena baru mendaftar di Classy CTE.<br/>
                Jika bukan kamu yang mendaftar, abaikan email ini.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
