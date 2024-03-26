<script setup>
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'lf-carousel'
})

const props = defineProps({
  height: {
    type: String,
    default: '150px'
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  indicatorPosition: {
    type: String,
    default: 'none'
  }
})

// 查询插槽中包含多少个item
const length = ref(0)
const elements = ref([])
const thisCarousel = ref(null)

onMounted(() => {
  // 获取本元素内部的子元素
  elements.value = thisCarousel.value.querySelectorAll(`.lf-carousel-item`)
  console.log(elements.value)
  length.value = elements.value.length
  // 给所有的元素添加z-index属性，依次减小
  // 目的是让列表中的第一个元素显示在最上面
  for (let i = 0; i < length.value; i++) {
    elements.value[i].style['z-index'] = length.value - i + 1
    elements.value[i].style['opacity'] = '0'
  }
  elements.value[props.initialIndex].style['opacity'] = '1'
  // 初始化active
  active.value = props.initialIndex
})

// 设置active
const active = ref(0)

// 回调函数 => 更改active.value
// 用户点击左侧和右侧的按钮也可以实现切换
// direction = -1则向左切换
const changeActive = (direction = 1, trigger = 'auto') => {
  if (trigger === 'auto' && !props.autoplay) {
    return
  }
  setLeaveEffect(active.value)
  active.value = (active.value + direction) % length.value
  if (active.value < 0) {
    active.value = length.value - 1
  }
  setEnterEffect(active.value)
}

// 设置离开效果
const setLeaveEffect = (index) => {
  elements.value[index].style['opacity'] = '0'
  elements.value[index].style['z-index'] = '0'
}

// 设置进入效果
const setEnterEffect = (index) => {
  // 改变z-index
  elements.value[index].style['z-index'] = '10'
  // 设置淡入淡出效果
  elements.value[index].style['opacity'] = '1'
}

let timer = ref(null)
onMounted(() => {
  // 如果设置自动播放为false则跳过设置定时器
  if (!props.autoplay) return
  // 定时器刷新正在显示的
  timer.value = setInterval(() => {
    changeActive()
  }, props.interval)
})

// 用户触摸走马灯时
const isTouched = ref(false)

const handleTouch = () => {
  // 鼠标放上去时，清除定时器
  if (!isTouched.value) {
    // 原来没放上来，现在放上来
    clearInterval(timer.value)
  } else {
    // 离开了，重新打开定时器
    timer.value = setInterval(() => {
      changeActive()
    }, props.interval)
  }
  isTouched.value = !isTouched.value
}

// 允许用户通过点击指示器图标切换展示的图片
const setActiveItem = (index) => {
  setLeaveEffect(active.value)
  active.value = index
  setEnterEffect(active.value)
}
</script>

<template>
  <section
    class="lf-carousel"
    ref="thisCarousel"
    :style="{ height: height }"
    @mouseenter="handleTouch"
    @mouseleave="handleTouch"
  >
    <slot></slot>
    <!-- 绘制小圆点 -->
    <ul
      class="lf-carousel__pointer"
      v-if="indicatorPosition !== 'none'"
      :class="[`lf-carousel__pointer--${indicatorPosition}`]"
    >
      <li
        class="lf-carousel__pointer--item"
        v-for="(item, index) in length"
        :key="item"
        :class="[{ active: active === index }]"
        @mouseenter="setActiveItem(index)"
      ></li>
    </ul>
    <!-- 绘制左右箭头，以进行切换 -->
    <div
      class="lf-carousel__arrow--back"
      :class="[
        { 'is-Touched': isTouched },
        {
          'lf-carousel__arrow--back--top':
            indicatorPosition === 'left' || indicatorPosition === 'right'
        }
      ]"
      @click="changeActive(-1, 'click')"
    ></div>
    <div
      class="lf-carousel__arrow--go"
      :class="[
        { 'is-Touched': isTouched },
        {
          'lf-carousel__arrow--go--bottom':
            indicatorPosition === 'left' || indicatorPosition === 'right'
        }
      ]"
      @click="changeActive(1, 'click')"
    ></div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/common.scss';
.lf-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.lf-carousel__pointer {
  position: absolute;
  display: flex;
  // bottom: 10%;
  gap: 10px;
  background-color: rgba(#fff, 0.3);
  backdrop-filter: blur(10px);
  padding: 5px;
  border-radius: 8px;
  z-index: 100;
  .lf-carousel__pointer--item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.2s;
  }
  .lf-carousel__pointer--item.active {
    background-color: $theme-color;
    box-shadow: 0 0 0 1px #fff;
  }
}
.lf-carousel__pointer.lf-carousel__pointer--top {
  // 指示器放在上方
  top: 10%;
}
.lf-carousel__pointer.lf-carousel__pointer--bottom {
  bottom: 10%;
}
.lf-carousel__pointer.lf-carousel__pointer--left {
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
}
.lf-carousel__pointer.lf-carousel__pointer--right {
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
}
[class*='lf-carousel__arrow'] {
  position: absolute;
  z-index: 100;
  background-color: rgba($theme-color, 0);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  // top: 50%;
  cursor: pointer;
  transition: all 0.4s;
  opacity: 0;
}
.is-Touched[class*='lf-carousel__arrow'] {
  background-color: rgba($theme-color, 0.6);
  opacity: 1;
  &:hover {
    background-color: rgba($theme-color, 1);
  }
}
[class*='lf-carousel__arrow']::after {
  display: block;
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid rgba(#fff, 1); /* 箭头颜色 */
}
.lf-carousel__arrow--back {
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}
.lf-carousel__arrow--back::after {
  margin-left: 50%;
  margin-top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(90deg);
}
.lf-carousel__arrow--back--top {
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
}
.lf-carousel__arrow--back--top::after {
  // 向上指
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 0; /* 箭头顶部边框透明 */
  border-bottom: 10px solid rgba(#fff, 1); /* 箭头底部边框（即向上箭头的尖端）颜色 */

  margin-left: 50%;
  transform: translateX(-50%) translateY(-75%);
}

.lf-carousel__arrow--go {
  bottom: 50%;
  right: 5px;
  transform: translateY(50%);
}
.lf-carousel__arrow--go--bottom {
  left: 50%;
  // top: 0%;
  bottom: 10px;
  transform: translateX(-50%);
}
.lf-carousel__arrow--go::after {
  margin-left: 50%;
  margin-top: 50%;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}
.lf-carousel__arrow--go--bottom::after {
  transform: rotate(0deg) translateX(-50%) translateY(-25%);
}
</style>
