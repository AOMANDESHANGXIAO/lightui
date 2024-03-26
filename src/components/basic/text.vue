<script setup>
defineOptions({
  name: 'lf-text'
})

const props = defineProps({
  size: {
    type: String,
    default: 'default'
  },
  type: {
    type: String,
    default: 'default'
  },
  tag: {
    type: String,
    default: 'span'
  },
  truncated: {
    type: Boolean,
    default: false
  },
  lineClamp: {
    type: [Number, String],
    default: 0
  }
})
</script>

<template>
  <component
    :is="tag"
    class="lf-text"
    :class="[
      `lf-text__font-size--${props.size}`,
      `lf-text--${props.type}`,
      { 'is-truncated': truncated },
      { 'is-line-clamp': lineClamp !== 0 }
    ]"
    :style="{ '-webkit-line-clamp': Number(lineClamp) > 0 ? lineClamp : 'auto' }"
    ><slot></slot
  ></component>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
$lf-text--large: 16px;
$lf-text--default: 14px;
$lf-text--small: 12px;
.lf-text {
  line-height: 25px;
  font-weight: 300;
  overflow-wrap: break-word;
}
b.lf-text {
  font-weight: 700;
}
// 控制文本大小
.lf-text__font-size--default {
  font-size: $lf-text--default;
}
.lf-text__font-size--large {
  font-size: $lf-text--large;
}
.lf-text__font-size--small {
  font-size: $lf-text--small;
}
// 控制文本样式
.lf-text--default {
  color: $lf-text-color;
}
.lf-text--primary {
  color: $theme-color;
}
.lf-text--success {
  color: $success-color;
}
.lf-text--warning {
  color: $warning-color;
}
.lf-text--info {
  color: $info-color;
}
.lf-text--danger {
  color: $danger-color;
}
// 控制文本是否超出省略
.lf-text.is-truncated {
  display: inline-block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
// 多行文本超出省略
.lf-text.is-line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
