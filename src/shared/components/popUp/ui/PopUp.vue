<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const closePopup = () => emit('update:modelValue', false)
</script>

<template>
  <div v-if="modelValue" @click="closePopup" class="popup">
    <div @click.stop class="popup__wrapper">
      <button type="button" @click="closePopup" class="popup__close">×</button>

      <div class="popup__content">
        <slot name="popupContent" />
      </div>
    </div>
  </div>
</template>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup__wrapper {
  background: #fff;
  position: relative;
  padding: 60px 40px 40px 40px;
}

.popup__close {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
