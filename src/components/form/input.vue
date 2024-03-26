<script setup>
import { ref, computed } from 'vue'

defineOptions({
  name: 'lf-input'
})

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Please Input'
  },
  name: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  // 带图标的输入框，前缀输入框
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '180px'
  },
  // textarea文本域专属参数
  autoSize: {
    type: Object,
    default: {}
  }
})

const emits = defineEmits(['change', 'update:modelValue', 'focus', 'blur'])
// 实现v-model绑定数据
const handleInput = (e) => {
  emits('update:modelValue', e.target.value)
}

// 实现一键清空数据
const inputFocus = ref(false)
const isFocus = ref(false)

const makeFocus = () => {
  isFocus.value = true
}

const makeNoFocus = () => {
  isFocus.value = inputFocus.value ? true : false
}
const handleClear = (event) => {
  // console.log('???')
  // event.preventDefault()
  if (event.button !== 0) return
  emits('update:modelValue', '')
}

const handleFocus = (e) => {
  inputFocus.value = true
  emits('focus', e)
}

const handleBlur = (e) => {
  // console.log('失去焦点')
  inputFocus.value = false
  isFocus.value = false
  emits('blur', e)
}

// 实现密码框的显示和隐藏
const passwordVisible = ref(false)

const handlePassword = (event) => {
  if (event.button !== 0) return
  passwordVisible.value = !passwordVisible.value
  // console.log(props.showPassword)
}

// 每添加一个后缀图标，为input增加10px的右侧内边距
const paddingRight = computed(() => {
  let right = 14
  // console.log(props.suffixIcon !== '')
  // console.log('0', props.suffixIcon)
  if (props.clearable && isFocus.value) {
    // console.log(1)
    right += 15
  }
  if (props.showPassword && isFocus.value) {
    // console.log(2)
    right += 15
  }
  if (props.suffixIcon !== '') {
    // console.log(3)
    right += 15
  }
  return right + 'px'
})

// textarea
const textarea = ref(null)

// 防抖
function debounce_(fun, wait) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fun(...args)
    }, wait)
  }
}

// 计算最小的高度
const minHeight = computed(() => {
  if (Object.keys(props.autoSize).length === 0) return '25px'
  const min = props.autoSize.minRows * 16
  return min
})

const handleAutoSize = debounce_((e) => {
  // console.log('0', props.autoSize)
  // console.log(Boolean(props.autoSize))
  if (Object.keys(props.autoSize).length === 0) return
  textarea.value.style.height = '25px'
  const maxHeight = props.autoSize.maxRows * 16
  const newHeight = e.target.scrollHeight - 20
  // console.log('maxHeight', maxHeight)
  // console.log('newHeight', newHeight)
  // console.log('================')
  textarea.value.style.height = Math.min(newHeight, maxHeight) + 'px'
}, 300)

const handleTextarea = (e) => {
  emits('update:modelValue', e.target.value)
  handleAutoSize(e)
}
</script>

<template>
  <section class="lf-input-container__input" :style="`width:${width}`" v-if="type !== 'textarea'">
    <input
      :class="[{ 'lf-input-prefix__icon': prefixIcon }, { 'lf-input-suffix__icon': suffixIcon }]"
      :type="passwordVisible ? (showPassword ? 'password' : 'text') : type"
      class="lf-input"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :name="props.name"
      @input="handleInput($event)"
      @focus="handleFocus($event)"
      @blur="handleBlur($event)"
      @mouseenter="makeFocus"
      @mouseleave="makeNoFocus"
      :style="`padding-right:${paddingRight};`"
    />
    <!-- 前缀图标 -->
    <span class="lf-input-prefix-icon" v-if="prefixIcon">
      <i :class="`lf-icon-${prefixIcon}`"></i>
    </span>
    <span class="lf-input-suffix">
      <!-- 后缀图标 -->
      <span class="lf-input-suffix-icon" v-if="suffixIcon">
        <i :class="`lf-icon-${suffixIcon}`"></i>
      </span>
      <span
        class="lf-icon-guanbi lf-input-icon"
        v-if="clearable && modelValue && isFocus"
        @mousedown.prevent="handleClear($event)"
        @mouseenter="makeFocus"
      ></span>
      <span
        class="lf-icon-liulan lf-input-icon"
        v-if="showPassword && modelValue"
        style="font-size: 18px"
        @mousedown.prevent="handlePassword($event)"
        @mouseenter="makeFocus"
      ></span>
    </span>
  </section>
  <section class="lf-input-container__textarea" :style="`width:${width}`" v-else>
    <textarea
      ref="textarea"
      class="lf-textarea"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      :name="props.name"
      @input="handleTextarea($event)"
      :style="{ minHeight: minHeight }"
    />
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
$lf-input-bg-color: #ffffff;
// 去掉小研究提示
input[type='password']::-ms-reveal,
input[type='password']::-ms-clear {
  display: none;
}
.lf-input-container__input {
  position: relative;
  display: inline-flex;
  align-items: center;
  .lf-input {
    box-sizing: border-box;
    display: inline-flex;
    // width: 580px;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 25px;
    padding: 1px 11px;
    background-color: $lf-input-bg-color;
    cursor: text;
    border: 1px solid $lf-border-color;
    border-radius: 5px;
    color: $lf-text-color;
    font-size: 14px;
    transition: all 0.6s;
    &:focus {
      outline: none;
      border-color: $theme-color;
      box-shadow: 0 0 0 1px rgba($theme-color, 0.5);
    }
    &:hover {
      border-color: #c0c4cc;
    }
    &::placeholder {
      color: #a8abb2;
    }
  }

  // 有前缀图标时，预留30px的左内边距
  .lf-input.lf-input-prefix__icon {
    padding-left: 30px;
  }
  // 有后缀图标时，预留30px的右内边距
  .lf-input.lf-input-suffix__icon {
    padding-right: 30px;
  }
  // 图标
  .lf-input-suffix {
    position: absolute;
    right: 5%;
    display: flex;
    align-items: center;
    .lf-input-icon {
      font-size: 12px;
      font-weight: 100;
      color: #a8abb2;
      &:hover {
        cursor: pointer;
        color: $theme-color;
      }
    }
  }

  // 前缀图标
  .lf-input-prefix-icon {
    position: absolute;
    left: 0;
    margin-left: 10px;
    // font-size: 28px;
    [class*='lf-icon'] {
      font-size: 19px;
      color: #a8abb2;
    }
  }
  // 后缀图标
  .lf-input-suffix-icon {
    // position: absolute;
    // right: 0;
    // margin-right: 10px;
    // font-size: 28px;
    [class*='lf-icon'] {
      font-size: 19px;
      color: #a8abb2;
    }
  }
}
.lf-input-container__textarea {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 25px;
  .lf-textarea {
    width: 100%;
    padding: 10px;
    background-color: $lf-input-bg-color;
    border: 1px solid $lf-border-color;
    border-radius: 5px;
    color: $lf-text-color;
    font-size: 14px;
    line-height: 16px;
    transition:
      border 0.6s,
      box-shadow 0.6s;
    &:focus {
      outline: none;
      border-color: $theme-color;
      box-shadow: 0 0 0 1px rgba($theme-color, 0.5);
    }
    &:hover {
      border-color: #c0c4cc;
    }
    &::placeholder {
      color: #a8abb2;
    }
  }
}
</style>
