import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import type { User } from '@/components/user/api/interfaces/User'

export const useUserStore = defineStore('users', () => {
  const userResources: Ref<User[]> = ref([])

  const users = computed(() => userResources.value)

  function setUsers(value: User[]) {
    userResources.value = value
  }

  function remove(item: User) {
    const userIndex = userResources.value.findIndex((user) => user.id === item.id)
    userResources.value.splice(userIndex, 1)
  }

  function edit(item: User) {
    const userIndex = users.value.findIndex((user) => user.id === item.id)
    userResources.value[userIndex] = item
  }

  function create(item: User) {
    userResources.value.push(item)
  }

  return { users, setUsers, remove, edit, create }
})
