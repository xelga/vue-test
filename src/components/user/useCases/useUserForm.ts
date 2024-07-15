import { type Ref, ref } from 'vue'
import type { UserForm } from '@/components/user/interfaces/UserForm'
import type { User } from '@/components/user/api/interfaces/User'
import { initUserForm } from '@/components/user/logic/initUserForm'

export const useUserForm = (isPopupOpen: Ref<boolean>) => {
  const form = ref<UserForm>(initUserForm())

  const setFormData = (item?: User) => {
    form.value = initUserForm(item)

    isPopupOpen.value = true
  }

  return { form, isPopupOpen, setFormData }
}
