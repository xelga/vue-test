import json from '@/components/user/api/mock/userList.json'
import type { User } from '@/components/user/api/interfaces/User'

export const getUsers = (): User[] => json
