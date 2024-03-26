<script setup>
import { provide, ref, onMounted } from 'vue'
defineOptions({
  name: 'lf-radio-group'
})

const props = defineProps({
  modelValue: {
    type: [Array, String, Boolean, Number],
    default: ''
  }
})

const r_value = ref('')

onMounted(() => {
  r_value.value = props.modelValue
})

provide('r_value', r_value)

const emits = defineEmits(['update:model-value'])

const updateModleValue = (newVal) => {
  emits('update:model-value', newVal)
  r_value.value = newVal
}

provide('update_v', updateModleValue)
</script>

<template>
  <div class="lf-radio-group"><slot></slot></div>
</template>

<style lang="scss" scoped>
.lf-radio-group {
  display: flex;
  gap: 10px;
}
</style>
