<script setup lang="ts" generic="T extends Record<string, any>">
import type { DataTableColumns } from '@/shared/components/dataTable/interfaces/DataTableColumns'
import type { DataTableActions } from '@/shared/components/dataTable/interfaces/DataTableActions'

defineProps<{
  data: T[]
  rowKey: string
  columns: DataTableColumns[]
  actions?: DataTableActions
}>()

const emit = defineEmits<{
  (e: 'removeItem', value: T): void
  (e: 'editItem', value: T): void
}>()

const removeItem = (item: T) => emit('removeItem', item)
const editItem = (item: T) => emit('editItem', item)
</script>

<template>
  <table class="data-table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key" class="data-table__cell">
          {{ column.title }}
        </th>
        <th v-if="actions?.edit.isActivated" class="data-table__cell">
          {{ actions.edit.title }}
        </th>
        <th v-if="actions?.delete.isActivated" class="data-table__cell">
          {{ actions.delete.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item[rowKey]">
        <td v-for="column in columns" :key="column.key" class="data-table__cell">
          <slot :name="column.key" :item="item">
            {{ item[column.key] }}
          </slot>
        </td>
        <td v-if="actions?.edit.isActivated" class="data-table__cell">
          <button @click="editItem(item)" type="button">{{ actions.edit.title }}</button>
        </td>
        <td v-if="actions?.delete.isActivated" class="data-table__cell">
          <button type="button" @click="removeItem(item)">
            {{ actions.delete.title }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.data-table {
  margin-top: 15px;
  border-collapse: collapse;
  min-width: 600px;
}

.data-table__cell {
  border: 1px solid black;
  padding: 6px 12px;
}

.data-table__cell:first-child {
  text-align: center;
}
</style>
