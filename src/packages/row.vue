<script setup>
import { computed, ref, provide } from 'vue'

defineOptions({
  name: 'lf-row'
})

const props = defineProps({
  gap: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    default: 'start'
  },
  align: {
    type: String,
    default: 'top'
  }
})

const justify_content = computed(() => {
  const chooseList = ['start', 'end', 'space-between', 'space-around', 'space-evenly']
  if (chooseList.includes(props.justify)) {
    if (props.justify === 'start' || props.justify === 'end') {
      return `flex${props.justify}`
    }
    return props.justify
  }
  return 'flex-start'
})

const align_items = ref(props.align)
provide('align', align_items)
</script>

<template>
  <div class="lf-row" :style="{ gap: `${props.gap}px`, 'justify-content': justify_content }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.lf-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
