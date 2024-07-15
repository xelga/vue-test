import type { DataTableColumns } from '@/shared/components/dataTable/interfaces/DataTableColumns'

export const userTableColumns: DataTableColumns[] = [
  {
    key: 'id',
    title: 'ID'
  },
  {
    key: 'firstName',
    title: 'First Name'
  },
  {
    key: 'lastName',
    title: 'Last Name'
  },
  {
    key: 'email',
    title: 'Email'
  },
  {
    key: 'lastVisitedAt',
    title: 'Last visited at'
  }
]
