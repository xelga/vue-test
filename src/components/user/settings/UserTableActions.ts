import type { DataTableActions } from '@/shared/components/dataTable/interfaces/DataTableActions'

export const userTableActions: DataTableActions = {
  create: {
    title: 'Add user',
    isActivated: true
  },
  delete: {
    title: 'Delete',
    isActivated: true
  },
  edit: {
    title: 'Edit',
    isActivated: true
  }
}
