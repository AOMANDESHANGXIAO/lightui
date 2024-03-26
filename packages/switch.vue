<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'lfSwitch'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  onColor: {
    type: String,
    default: ''
  },
  offColor: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])

const switchCore = ref(null)

const changeSwitchColor = () => {
  // 用户必须传入了这两个参数才会生效
  if (!props.modelValue && props.offColor) {
    switchCore.value.style.backgroundColor = props.offColor
  } else if (props.modelValue && props.onColor) {
    switchCore.value.style.backgroundColor = props.onColor
  }
}

// 修改按钮的状态
const handleChecked = () => {
  changeSwitchColor()
  emits('update:modelValue', !props.modelValue)
  // console.log(props.modelValue)
  // 使用JS来修改背景颜色
}
</script>

<template>
  <span class="lf-switch" :class="[{ 'is-disabled': disabled }]">
    <!-- 设置禁用状态 -->
    <!-- 左侧提示文字 -->
    <!-- 当用户输出提示词并且不选择显示在点内时才展示 -->
    <span
      class="lf-switch__label-text"
      :class="[
        { 'is-checked': props.modelValue },
        { 'lf-switch--large': props.size === 'large' },
        { 'lf-switch--small': props.size === 'small' }
      ]"
      v-if="inactiveText && !inlinePrompt"
      >{{ inactiveText }}</span
    >
    <!-- 中间选择器部分 -->
    <span
      ref="switchCore"
      class="lf-switch__core"
      @click="handleChecked"
      :class="[
        { 'is-checked': props.modelValue },
        { 'lf-switch--large': props.size === 'large' },
        { 'lf-switch--small': props.size === 'small' }
      ]"
    >
      <!-- 用户选择内嵌提示词时 -->
      <div
        v-if="(activeText || inactiveText) && inlinePrompt"
        class="lf-switch__inline-prompt"
        :class="[
          { 'is-checked': props.modelValue },
          { 'lf-switch--large': props.size === 'large' },
          { 'lf-switch--small': props.size === 'small' }
        ]"
      >
        {{ !modelValue ? activeText : inactiveText }}
      </div>
      <!-- 小圆圈 -->
      <div
        class="lf-switch__action"
        :class="[
          { 'is-checked': props.modelValue },
          { 'lf-switch--large': props.size === 'large' },
          { 'lf-switch--small': props.size === 'small' }
        ]"
      ></div>
    </span>
    <!-- 右侧提示文字模块 -->
    <span
      class="lf-switch__label-text"
      :class="[
        { 'is-checked': !props.modelValue },
        { 'lf-switch--large': props.size === 'large' },
        { 'lf-switch--small': props.size === 'small' }
      ]"
      v-if="activeText && !inlinePrompt"
      >{{ activeText }}</span
    >
  </span>
</template>

<style lang="scss" scoped>
@import './assets/styles/common.scss';
$lf-switch-border-color: #dcdfe6;
$lf-switch-off-color: #dcdfe6;
.lf-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  overflow: hidden;
}

.lf-switch.is-disabled {
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#fff, 0.5);
    cursor: not-allowed;
  }
}
.lf-switch__core {
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  min-width: 40px;
  height: 20px;
  border: 1px solid $lf-switch-border-color;
  border-radius: 10px;
  background-color: $lf-switch-off-color;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s;
  .lf-switch__action {
    position: absolute;
    left: 2px;
    transition: all 0.5s;
    height: 16px;
    width: 16px;
    border-radius: 10px;
    background-color: white;
  }
  .lf-switch__action.is-checked {
    left: calc(100% - 18px);
  }
}

// 背景颜色的大小控制
.lf-switch__core.is-checked {
  background-color: $theme-color;
}

.lf-switch__core.lf-switch--large {
  min-width: 50px;
  height: 24px;
  border-radius: 12px;
}
.lf-switch__core.lf-switch--small {
  min-width: 30px;
  height: 16px;
  border-radius: 8px;
}

// 小圆圈的大小控制
.lf-switch__core .lf-switch__action.lf-switch--large {
  width: 18px;
  height: 18px;
}
.lf-switch__core .lf-switch__action.lf-switch--small {
  width: 12px;
  height: 12px;
}
.lf-switch__core .lf-switch__action.lf-switch--large.is-checked {
  left: calc(100% - 20px);
}
.lf-switch__core .lf-switch__action.lf-switch--small.is-checked {
  left: calc(100% - 14px);
}

// 写在文本左右的提示文字
.lf-switch__label-text {
  transition: color 0.5s;
  font-size: 14px;
  font-weight: 150;
  color: $theme-color;
}
.lf-switch__label-text.is-checked {
  color: $lf-text-color;
}

.lf-switch__label-text.lf-switch--large {
  font-size: 16px;
}

.lf-switch__label-text.lf-switch--small {
  font-size: 12px;
}

// 写在里面的提示词
.lf-switch__inline-prompt {
  font-size: 12px;
  margin-left: 20px;
  margin-right: 4px;
  color: #fff;
}
.lf-switch__inline-prompt.lf-switch--large {
  margin-left: 22px;
  margin-right: 4px;
  font-size: 14px;
}
.lf-switch__inline-prompt.lf-switch--small {
  margin-left: 16px;
  margin-right: 4px;
  font-size: 10px;
}
.lf-switch__inline-prompt.is-checked {
  margin-left: 4px;
  margin-right: 20px;
}
.lf-switch__inline-prompt.lf-switch--large.is-checked {
  margin-left: 4px;
  margin-right: 22px;
}
.lf-switch__inline-prompt.lf-switch--small.is-checked {
  margin-left: 4px;
  margin-right: 16px;
}
</style>
