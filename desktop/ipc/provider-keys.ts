import {
  deleteUserProviderKey,
  listProviderKeyStates,
  upsertUserProviderKey,
} from '../../lib/llm/user-api-keys'

export async function handleProviderCommand(
  command: string,
  payload: any,
  userId: string
) {
  if (command === 'provider:list') {
    return { providers: await listProviderKeyStates(userId) }
  }

  if (command === 'provider:save') {
    await upsertUserProviderKey(userId, payload.provider, payload.apiKey)
    return { providers: await listProviderKeyStates(userId) }
  }

  if (command === 'provider:delete') {
    await deleteUserProviderKey(userId, payload.provider)
    return { providers: await listProviderKeyStates(userId) }
  }

  throw new Error(`Unknown provider command: ${command}`)
}
