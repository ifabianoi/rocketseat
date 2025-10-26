import type { Role } from '@saas/auth'

import { api } from './api-client'

interface GetInviteRequest {
  inviteId: string
}

interface GetInviteResponse {
  invite: {
    id: string
    role: Role
    email: string
    createdAt: string
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
    organization: {
      name: string
    }
  }
}

export async function getInvite({ inviteId }: GetInviteRequest) {
  const result = await api.get(`invites/${inviteId}`).json<GetInviteResponse>()

  return result
}
