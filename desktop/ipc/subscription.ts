import type { User } from '@prisma/client'

import { createSubscriptionInvoice } from '../../lib/billing/subscription-service'

type DesktopSubscriptionUser = Pick<User, 'id' | 'email' | 'name'>

export async function handleSubscriptionCommand(
  payload: any,
  user: DesktopSubscriptionUser
) {
  return createSubscriptionInvoice({
    userId: user.id,
    email: user.email,
    name: user.name ?? 'User',
    tier: payload.tier,
    interval: payload.interval,
  })
}
