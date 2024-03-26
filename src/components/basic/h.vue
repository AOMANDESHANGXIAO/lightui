<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'lf-h'
})

const props = defineProps({
  size: {
    type: String,
    default: 'normal'
  },
  decorate: {
    type: Boolean,
    default: true
  },
  linearColor: {
    type: Array,
    default: null
  }
})
const colorStr = computed(() => {
  if (!props.linearColor) return ''
  let color_str = ''
  props.linearColor.forEach((item) => {
    color_str += `${item},`
  })
  // -webkit-linear-gradient(right, $theme-color, $success-color)
  return `-webkit-linear-gradient(right, ${color_str.substring(0, color_str.length - 1)})`
})
const styles = computed(() => {
  if (colorStr.value) {
    return {
      background: colorStr.value,
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }
  } else {
    return ''
  }
})
</script>

<template>
  <div>
    <h1 class="lf-h" :class="[`lf-h--${props.size}`, { 'is-decorated': decorate }]" :style="styles">
      <slot></slot>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.lf-h {
  color: $lf-text-color;
  padding: 5px;
  display: inline-flex;
  width: auto;
  align-items: center;
  justify-content: flex-start;
}
.lf-h--normal {
  font-size: $lf-normal-title-font-size;
}
.lf-h--small {
  font-size: $lf-small-title-font-size;
}
.lf-h--large {
  font-size: $lf-large-title-font-size;
}

.lf-h.is-decorated {
  &::before {
    // position: absolute;
    content: '';
    // left: 0;
    // top: 0;
    width: 6px;

    margin-right: 15px;
    background-color: $theme-color;
  }
}
.is-decorated.lf-h--normal::before {
  height: 28px;
}
.is-decorated.lf-h--small::before {
  height: 18px;
}
.is-decorated.lf-h--large::before {
  height: 48px;
}
</style>
