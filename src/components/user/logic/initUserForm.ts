import type { User } from '@/components/user/api/interfaces/User'
import type { UserForm } from '@/components/user/interfaces/UserForm'

export const initUserForm = (item?: User): UserForm => ({
  id: item?.id,
  firstName: item?.firstName || '',
  lastName: item?.lastName || '',
  email: item?.email || ''
})
