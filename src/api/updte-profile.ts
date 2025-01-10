import { api } from '@/lib/axios'

interface UpdateProfileBoby {
  name: string
  description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBoby) {
  await api.put('/profile', { name, description })
}
