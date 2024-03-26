<script setup>
import { inject } from 'vue'
defineOptions({
  name: 'lf-radio'
})

const props = defineProps({
  value: {
    type: [Array, String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const v = inject('r_value')

const update_v = inject('update_v')

const handleUpdateV = () => {
  if (props.disabled) return
  update_v(props.value)
}
</script>

<template>
  <span class="lf-radio" @click="handleUpdateV">
    <span
      class="lf-radio__input"
      :class="[{ 'is-checked': props.value === v }, { 'is-disabled': props.disabled }]"
    >
      <input type="radio" class="lf-radio__input--orginal" :value="v" />
    </span>
    <span
      class="lf-radio__label"
      :class="[{ 'is-checked': props.value === v }, { 'is-disabled': props.disabled }]"
      ><slot></slot
    ></span>
  </span>
</template>

<style lang="scss" scoped>
$lf-border-color: #eaecf0;
$lf-text-color: #606266;
$theme-color: #8e43e7;
.lf-radio {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.lf-radio__input {
  // 画一个小圆
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid $lf-border-color;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    border-color: $theme-color;
  }
}
.lf-radio__input.is-disabled {
  background-color: #f5f7fa;
  border: 1px solid $lf-border-color;
  cursor: not-allowed;
}
.lf-radio__input--orginal {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
.lf-radio__input.is-checked {
  background-color: $theme-color;
  border: 1px solid $theme-color;
  &::after {
    display: block;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
  }
}
.lf-radio__input.is-checked.is-disabled {
  background-color: #f5f7fa;
  border: 1px solid $lf-border-color;
  cursor: not-allowed;
  &::after {
    display: block;
    background-color: #a8abb2;
  }
}
.lf-radio__label.is-disabled,
.lf-radio__label.is-checked.is-disabled {
  color: #a8abb2;
  cursor: not-allowed;
}
.lf-radio__label {
  font-size: 14px;
  color: $lf-text-color;
  padding-left: 5px;
  cursor: pointer;
  transition: all 0.4s;
}
.lf-radio__label.is-checked {
  color: $theme-color;
}
</style>
