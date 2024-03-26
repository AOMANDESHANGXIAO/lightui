<script setup>
import { inject, computed } from 'vue'

defineOptions({
  name: 'lf-col'
})

const props = defineProps({
  span: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 0
  }
})

const align = inject('align')

const align_items = computed(() => {
  const align_list = ['middle', 'top', 'bottom']
  if (align_list.includes(align.value)) {
    if (align.value === 'middle') {
      return 'center'
    }
    if (align.value === 'top') {
      return 'flex-start'
    }
    if (align.value === 'bottom') {
      return 'flex-end'
    }
  }
  return 'flex-start'
})
</script>

<template>
  <div
    class="lf-col"
    :style="{
      width: `${(props.span / 24) * 100}%`,
      'margin-left': `${(offset / 24) * 100}%`,
      'align-items': align_items
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.lf-col {
  height: 100%;
  display: flex;
}
</style>
