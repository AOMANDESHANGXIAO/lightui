<script setup>
import lfButton from '@/components/basic/button.vue'
import { watch, ref } from 'vue'

defineOptions({
  name: 'lf-dialog'
})

const emits = defineEmits(['update:modelValue', 'close', 'open'])

const props = defineProps({
  // v-model的默认值，可以通过该值实现双向绑定
  modelValue: {
    type: Boolean,
    default: true
  },
  'background-color': {
    type: String,
    default: 'white'
  },
  title: {
    type: String,
    default: 'Tips'
  },
  width: {
    type: String,
    default: '500px'
  },
  top: {
    type: String,
    default: '15vh'
  },
  'show-close': {
    type: Boolean,
    default: true
  },
  draggable: {
    type: Boolean,
    default: false
  }
})

const handleClose = () => {
  emits('update:modelValue', false)
  // 传递一个事件，方便回调
  emits('close')
}

const handleOpen = () => {
  emits('open')
}

const lfDialog = ref(null)

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      handleOpen()
    }
  }
)

// 实现对话框拖拽功能
const dialog = ref(null)

const originalPosition = ref({ top: 0, left: 0 })

// 定义一个 ref 用于保存鼠标点击位置相对于对话框左上角的位置
const dragOffset = ref({ top: 0, left: 0 })

const startDragging = (event) => {
  if (!props.draggable) return
  // 记录下对话框的原始 top 和 left 值
  originalPosition.value = { top: dialog.value.offsetTop, left: dialog.value.offsetLeft }

  // 记录下鼠标点击位置相对于对话框左上角的位置
  dragOffset.value = {
    top: event.clientY - dialog.value.offsetTop,
    left: event.clientX - dialog.value.offsetLeft
  }

  // 添加鼠标移动和释放事件监听器
  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', stopDragging)
}

const drag = (event) => {
  originalPosition.value = { top: dialog.value.offsetTop, left: dialog.value.offsetLeft }

  // 记录下鼠标点击位置相对于对话框左上角的位置
  dialog.value.style.top = event.clientY - dragOffset.value.top + 'px'
  dialog.value.style.left = event.clientX - dragOffset.value.left + 'px'
}

const stopDragging = () => {
  document.removeEventListener('mousemove', drag)
  document.removeEventListener('mouseup', stopDragging)
}
</script>

<template>
  <Transition>
    <!-- .self修饰符表示点击自身触发事件 -->
    <div v-if="props.modelValue" class="lf-overlay-dialog" @click.self="handleClose" ref="lfDialog">
      <section
        class="lf-dialog"
        :style="`width:${width};top:${top};background-color:${backgroundColor}`"
        ref="dialog"
      >
        <span class="lf-dialog-close" @click="handleClose" v-if="showClose">X</span>
        <header
          class="lf-dialog-header"
          @mousedown="startDragging"
          :class="{ 'is-draggable': props.draggable }"
        >
          <!-- 直接直接传title，或者传一个组件进来 -->
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
        </header>
        <!-- 传递消息 -->
        <span class="lf-dialog-message">
          <slot></slot>
        </span>
        <!-- 支持底部传按钮 -->
        <slot name="footer">
          <section class="lf-dialog-footer">
            <lf-button @click="handleClose">cancle</lf-button>
            <lf-button type="primary" @click="handleClose">confirm</lf-button>
          </section>
        </slot>
      </section>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import './assets/styles/dialog.scss';
</style>
