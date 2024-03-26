<script setup>
import { ref, provide } from 'vue'

defineOptions({
  name: 'lf-collapse'
})

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  accordion: {
    type: Boolean,
    default: false
  }
})

const collapse = ref(null)
const emits = defineEmits(['update:modelValue'])

// 传递一个方法
const changeActive = (newActive) => {
  // console.log('commits...', newActive)
  activeName_.value = newActive
  emits('update:modelValue', newActive)
}

const activeName_ = ref(props.modelValue)
const accordion_ = ref(props.accordion)
provide('changeActive', changeActive)
provide('activeName', activeName_)
provide('accordion', accordion_)
</script>

<template>
  <section class="lf-collapse" ref="collapse">
    <!-- 提供一个插槽,用于放置collapse item -->
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.lf-collapse {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-bottom: 1px solid $lf-border-color;
  transition: all 0.4s;
}
</style>
