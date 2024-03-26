<script setup>
import { ref, onMounted, inject, computed } from 'vue'

defineOptions({
  name: 'lf-collapse-item'
})
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  name: {
    type: [String, Number],
    default: ''
  }
})
const changeActive = inject('changeActive')
const activeName = inject('activeName')
const accordion = inject('accordion')

const content = ref(null)
// 当采用非手风琴效果时，各个组件之间互不影响
const active_not_accordion = ref(false)
// 标记是否活跃，未折叠
const active = computed(() => {
  // 非手风琴模式
  if (!accordion.value) {
    return active_not_accordion.value
  }
  return props.name === activeName.value
})

const handleFold = () => {
  // 非手风琴模式
  if (!accordion.value) {
    active_not_accordion.value = !active_not_accordion.value
  } else {
    // 如自己已经活跃，将活跃的item名设置为null
    if (activeName.value === props.name) {
      changeActive(null)
    } else {
      changeActive(props.name)
    }
  }
}

const h = ref('')

onMounted(() => {
  // 非手风琴时，将name === activeName的组件的active_not_accordition初始标记为true
  if (!accordion.value) {
    active_not_accordion.value = props.name === activeName.value
  }
  content.value.style.height = 'auto'
  content.value.style['height'] = content.value.offsetHeight + 'px'
  h.value = content.value.offsetHeight + 'px'
  content.value.style.height = '0px'
})
</script>

<template>
  <section class="lf-collapse-item" :name="name">
    <header class="lf-collapse-item__header" @click="handleFold">
      <slot name="title">
        <span>{{ title }}</span></slot
      >
      <svg
        t="1711189173429"
        class="icon lf-collapse-item__header--arrow"
        :class="{ 'lf-collapse-item__header--arrow--isfolded': !active }"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4244"
        width="20"
        height="20"
      >
        <path
          d="M301.568 536.32c-7.168 0-14.336-2.816-19.968-8.192-11.008-11.008-11.008-28.928 0-39.936L702.464 67.584c11.008-11.008 28.928-11.008 39.936 0 11.008 11.008 11.008 28.928 0 39.936L321.536 528.128c-5.376 5.376-12.8 8.192-19.968 8.192z"
          p-id="4245"
          fill="#dbdbdb"
        ></path>
        <path
          d="M722.432 964.864c-7.168 0-14.336-2.816-19.968-8.192L281.6 535.808c-11.008-11.008-11.008-28.928 0-39.936 11.008-11.008 28.928-11.008 39.936 0L742.4 916.736c11.008 11.008 11.008 28.928 0 39.936-5.632 5.376-12.8 8.192-19.968 8.192z"
          p-id="4246"
          fill="#dbdbdb"
        ></path>
      </svg>
    </header>
    <main
      class="lf-collapse-item__content"
      ref="content"
      :name="name"
      :style="{ height: !active ? '0px' : h }"
    >
      <section class="lf-collapse-item__content--slot">
        <slot></slot>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import './assets/styles/common.scss';
.lf-collapse-item {
  border-top: 1px solid $lf-border-color;
}
.lf-collapse-item__header {
  padding: 10px 0;
  font-size: 13px;
  color: $lf-text-color;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// 箭头
.lf-collapse-item__header--arrow {
  transition: all 0.4s;
  transform-origin: center;
  transform: rotate(-90deg);
}
.lf-collapse-item__header--arrow--isfolded {
  transform: rotate(-180deg);
}
.lf-collapse-item__content {
  transition: all 0.4s;
  overflow: hidden;
}
.lf-collapse-item__content--isFolded {
  // transition: all 0.4s;
  height: 0px;
}
.lf-collapse-item__content--slot {
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 13px;
  color: $lf-text-color;
  font-weight: 500;
}
</style>
