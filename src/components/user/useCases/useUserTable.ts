import type { UserForm } from '@/components/user/interfaces/UserForm'
import { useUserStore } from '@/components/user/store/useUserStore'
import { storeToRefs } from 'pinia'
import type { Ref } from 'vue'
import { getTimestampNow } from '@/shared/utils/getTimestampNow'
import { getNextId } from '@/shared/utils/getNextId'

export const useUserTable = (isPopupOpen: Ref<boolean>) => {
  const store = useUserStore()
  const { edit, create, remove } = store

  const { users } = storeToRefs(store)

  const editUser = (form: UserForm) => {
    const user = users.value.find((user) => user.id === form.id)
    if (!user) {
      return
    }

    user.firstName = form.firstName
    user.lastName = form.lastName
    user.email = form.email

    edit(user)
  }

  const createUserItem = (form: UserForm) => {
    const user = {
      id: getNextId(users.value),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      lastVisitedAt: getTimestampNow()
    }

    create(user)
  }

  const saveUserData = (form: UserForm) => {
    if (form.id) {
      editUser(form)
    } else {
      createUserItem(form)
    }

    isPopupOpen.value = false
  }

  return { users, remove, saveUserData }
}
