<script setup lang="ts">
import { getUsers } from '@/components/user/api/getUsers'
import DataTable from '@/shared/components/dataTable/ui/DataTable.vue'
import { userTableColumns } from '@/components/user/settings/UserTableColumns'
import { userTableHeader } from '@/components/user/settings/UserTableHeader'
import { userTableActions } from '@/components/user/settings/UserTableActions'
import { useUserStore } from '@/components/user/store/useUserStore'
import { useUserTable } from '@/components/user/useCases/useUserTable'
import { useUserForm } from '@/components/user/useCases/useUserForm'
import { ref } from 'vue'
import PopUp from '@/shared/components/popUp/ui/PopUp.vue'
import UserForm from '@/components/user/ui/UserForm.vue'
import { getDateFromTimestamp } from '@/shared/utils/getDateFromTimestamp'
import { userTableRowKey } from '@/components/user/settings/UserTableRowKey'

const { setUsers } = useUserStore()
setUsers(getUsers())

const isPopupOpen = ref(false)
const { users, remove, saveUserData } = useUserTable(isPopupOpen)
const { form, setFormData } = useUserForm(isPopupOpen)
</script>
<template>
  <main>
    <section class="section section--content-centered">
      <div>
        <div v-if="userTableHeader">
          <h2>{{ userTableHeader.title }}</h2>
          <p>{{ userTableHeader.description }}</p>
        </div>
        <div v-if="userTableActions?.create" class="container container--content-right">
          <button type="button" @click="setFormData()">
            {{ userTableActions.create.title }}
          </button>
        </div>
        <DataTable
          :data="users"
          :columns="userTableColumns"
          :actions="userTableActions"
          :row-key="userTableRowKey"
          @remove-item="remove"
          @edit-item="setFormData"
        >
          <template #lastVisitedAt="{ item }">
            {{ getDateFromTimestamp(item.lastVisitedAt) }}
          </template>
        </DataTable>
      </div>
    </section>
  </main>
  <PopUp v-model="isPopupOpen">
    <template #popupContent>
      <UserForm :form="form" @submit="saveUserData" />
    </template>
  </PopUp>
</template>

<style>
.container {
  display: flex;
}

.container--content-right {
  justify-content: flex-end;
  margin-top: 15px;
}
</style>
