<script setup lang="ts">
import { ref, watch } from 'vue'
import type { UserForm } from '@/components/user/interfaces/UserForm'

const props = defineProps<{
  form: UserForm
}>()

const emit = defineEmits<{
  (e: 'submit', value: UserForm): void
}>()

const inputValue = ref(props.form)

const onSubmit = () => emit('submit', inputValue.value)

watch(
  () => props.form,
  () => {
    inputValue.value = props.form
  }
)
</script>

<template>
  <form class="form" @submit.prevent="onSubmit()">
    <fieldset class="form__group">
      <label for="firstName" class="form__label">
        <span>First name</span><br />
        <input v-model="inputValue.firstName" id="firstName" class="form__input" required />
      </label>
      <label for="lastName" class="form__label">
        <span>Last name</span><br />
        <input v-model="inputValue.lastName" id="lastName" class="form__input" required />
      </label>
      <label for="email" class="form__label">
        <span>Email</span><br />
        <input v-model="inputValue.email" id="email" class="form__input" required />
      </label>
    </fieldset>
    <div class="form__group">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<style>
.form__group {
  border: none;
  display: flex;
  justify-content: center;
}

.form__group:not(:first-child) {
  margin-top: 15px;
}

.form__label:not(:first-child) {
  margin-left: 15px;
}

.form__input {
  padding: 8px 12px;
}
</style>
