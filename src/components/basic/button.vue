<script setup>
import { computed } from 'vue'
defineOptions({
  name: 'lf-button'
})
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否为文字按钮
  text: {
    type: Boolean,
    default: false
  },
  // 提供加载动画
  loading: {
    type: Boolean,
    default: false
  },
  // 是否需要防抖
  debounce: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click'])

// 实现防抖功能
const wait = computed(() => {
  return props.debounce ? 300 : 0
})

const debounce_ = (fun, wait) => {
  let timeId
  const newFun = (...args) => {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      fun(...args)
    }, wait)
  }
  return newFun
}

const handleClick = debounce_((e) => {
  if (props.disabled || props.loading) return
  emits('click', e)
}, wait.value)

const iconName = computed(() => {
  if (props.icon.endsWith('--left')) {
    // 将末尾的--left去掉
    return props.icon.slice(0, -6)
  } else if (props.icon.endsWith('--right')) {
    return props.icon.slice(0, -7)
  } else {
    return props.icon
  }
})

const iconPosition = computed(() => {
  if (props.icon.endsWith('--left')) {
    return 'left'
  } else if (props.icon.endsWith('--right')) {
    return 'right'
  } else {
    return 'left'
  }
})
</script>

<template>
  <button
    class="lf-button"
    @click="handleClick($event)"
    :class="[
      `lf-button--${props.type}`,
      { 'is-plain': props.plain },
      { 'is-round': props.round },
      { 'is-circle': props.circle },
      { 'is-disabled': props.disabled },
      { 'is-text': props.text },
      { 'is-loading': props.loading }
    ]"
  >
    <!-- 加载动画 -->
    <ul v-if="props.loading" class="is-loading">
      <li class="item-1"></li>
      <li class="item-2"></li>
      <li class="item-3"></li>
    </ul>
    <!-- 放字体图标 -->
    <i :class="iconName" v-if="icon && iconPosition === 'left'"></i>
    <!-- 如果没有传入插槽，则不显示span标签 -->
    <span v-if="$slots.default">
      <!-- 插槽，传递的是文本 -->
      <slot></slot>
    </span>
    <i :class="iconName" v-if="icon && iconPosition === 'right'"></i>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/button.scss';
</style>
