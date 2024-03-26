<script setup>
import { computed, ref } from 'vue'

defineOptions({
  name: 'lf-progress'
})

const props = defineProps({
  percentage: {
    type: Number,
    default: 90
  },
  type: {
    type: String,
    default: 'line'
  },
  status: {
    type: String,
    default: 'primary'
  },
  showTextOutside: {
    type: Boolean,
    default: false
  },
  showTextInside: {
    type: Boolean,
    default: false
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  color: {
    // 接收一个数组或者函数
    type: [Array, Function],
    default: null
  },
  // 渐变色进度条
  linearColor: {
    type: Array,
    default: null
  },
  indeterminate: {
    type: Boolean,
    default: false
  }
})

// 处理传入的百分比，不能大于100和小于0
const strokePercentage = computed(() => {
  if (props.percentage > 100) {
    return 100
  } else if (props.percentage < 0) {
    return 0
  } else {
    return props.percentage.toFixed(0)
  }
})

// 根据传入的百分比计算出偏移量
const strokeDashoffset = computed(() => {
  return (((100 - strokePercentage.value) / 100) * 314).toString()
})

const svg = ref(null)

// 计算当前进度条的颜色
const currentColor = computed(() => {
  let colorStr = undefined
  // console.log(strokePercentage)
  // 1. 传入的是数组
  if (props.color instanceof Array) {
    props.color.forEach((c) => {
      if (strokePercentage.value >= c.percentage) {
        colorStr = c.color
      }
    })
    colorStr = !colorStr ? props.color[0].color : colorStr
  } else if (props.color instanceof Function) {
    colorStr = props.color(strokePercentage.value)
  }
  return colorStr
})

// 采用渐变色进度条的颜色
const linearCurrentColor = computed(() => {
  let colorStr = ''
  if (props.linearColor instanceof Array) {
    // 以数组形式传递
    colorStr = props.linearColor.join(',')
  }
  // console.log(`linear-gradient(to right, ${colorStr})`)
  return `linear-gradient(to right, ${colorStr})`
})

const linearGradientHTML = computed(() => {
  // 用户传入的渐变色数组格式 ['#4BC0C8', '#C779D0', '#FEAC5E']":
  const stops = props.linearColor.map((color, index) => {
    return `<stop offset="${(index / (props.linearColor.length - 1)) * 100}%" stop-color="${color}"/>`
  })
  return `<linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="0%">${stops.join('')}</linearGradient>`
})
</script>

<template>
  <!-- 线性 -->
  <div v-if="type === 'line'" class="lf-progress__line" :style="{ height: `${strokeWidth}px` }">
    <div class="lf-progress__line--bgc" :style="{ 'border-radius': `${strokeWidth / 2}px` }">
      <div
        class="lf-progress__line--progress"
        :style="{
          width: `${strokePercentage}%`,
          'border-radius': `${strokeWidth / 2}px`,
          'background-color': color ? currentColor : '',
          background: linearColor ? linearCurrentColor : ''
        }"
        :class="[
          `lf-progress__line--progress--${status}`,
          { 'lf-progress__line--progress--animation': indeterminate }
        ]"
      >
        <span class="lf-progress__line--inside">
          <slot name="inside">
            <span v-if="showTextInside">{{ strokePercentage }} %</span>
          </slot>
        </span>
      </div>
    </div>
    <span class="lf-progress__line--outside">
      <slot name="outside">
        <span v-if="showTextOutside">{{ strokePercentage }} %</span>
      </slot>
    </span>
  </div>
  <!-- 环形 -->
  <div class="lf-progress__circle" v-if="type === 'circle'">
    <svg width="126" height="126" view-box="0 0 126 126" ref="svg">
      <!-- 灰色背景圆环 -->
      <circle
        cx="63"
        cy="63"
        r="50"
        class="lf-progress__circle--bgc"
        :stroke-width="strokeWidth"
      ></circle>
      <!-- 实际上的进度条圆环 -->
      <defs v-html="linearGradientHTML"></defs>
      <circle
        cx="63"
        cy="63"
        r="50"
        class="lf-progress__circle--progress"
        :stroke="linearColor ? 'url(#linear-gradient)' : color ? currentColor : ''"
        :stroke-width="strokeWidth"
        stroke-dasharray="314 314"
        :stroke-dashoffset="strokeDashoffset"
        :class="[
          `lf-progress__circle--progress--${!color ? status : ''}`,
          { 'lf-progress__circle--progress--animation': indeterminate }
        ]"
      ></circle>
    </svg>
    <!-- 提供插槽 -->
    <div class="lf-progress__circle-showtext">
      <slot>
        <div>{{ strokePercentage }} %</div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/styles/common.scss';
$lf-progress-bg-color: #f5f7fa;
$lf-progress__line--bgc-height: 6px;
// 线性进度条
.lf-progress__line {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: $lf-text-color;
  .lf-progress__line--bgc {
    background-color: $lf-progress-bg-color;
    width: 85%;
    height: 100%;
    border-radius: $lf-progress__line--bgc-height / 2;
    overflow: hidden;
  }
  .lf-progress__line--progress {
    position: relative;
    background-color: $theme-color;
    height: 100%;
    // width: 50px;
    border-radius: $lf-progress__line--bgc-height / 2;
    transition: all 0.5s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
.lf-progress__line--progress.lf-progress__line--progress--primary {
  background-color: $theme-color;
}
.lf-progress__line--progress.lf-progress__line--progress--success {
  background-color: $success-color;
}
.lf-progress__line--progress.lf-progress__line--progress--warning {
  background-color: $warning-color;
}
.lf-progress__line--progress.lf-progress__line--progress--danger {
  background-color: $danger-color;
}

.lf-progress__line--inside {
  color: #fff;
  font-size: 9px;
  margin-right: 5px;
}
.lf-progress__line--outside {
  color: $lf-text-color;
  font-size: 14px;
}
// 直线进度条的动画
@keyframes lf-progress--line--animation {
  0% {
    right: 100%;
  }
  100% {
    // transform: ;
    right: -100%;
  }
}

.lf-progress__line--progress--animation {
  animation: lf-progress--line--animation 1.5s ease infinite;
}

// 环形进度条
.lf-progress__circle {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  // background-color: pink;
}
.lf-progress__circle--progress {
  transition: all 0.5s;
  fill: none;
  // stroke: $theme-color;
  // stroke-width: 6; // 进度条的宽度
  // stroke-dasharray: 314, 314; // dash表示虚线，stroke-dash表示将边框设置为虚线
  // // stroke-dasharray表示这个属性可以接受多个值，实际上一般是接收两个值
  // stroke-dashoffset: 100; // 边框的偏移距离，设置偏移位置来模拟百分比
  stroke-linecap: round; // 圆角属性
  // 更改圆环转动的锚点
  transform-origin: center;
  // 让圆环从12点方向开始转动
  transform: rotate(-90deg);
}
.lf-progress__circle--progress.lf-progress__circle--progress--primary {
  stroke: $theme-color;
}
.lf-progress__circle--progress.lf-progress__circle--progress--success {
  stroke: $success-color;
}
.lf-progress__circle--progress.lf-progress__circle--progress--warning {
  stroke: $warning-color;
}
.lf-progress__circle--progress.lf-progress__circle--progress--danger {
  stroke: $danger-color;
}
.lf-progress__circle--bgc {
  fill: none;
  stroke: $lf-progress-bg-color;
  // stroke-width: 6;
}

.lf-progress__circle-showtext {
  position: absolute;
}

// 环形进度条动画
@keyframes lf-progress--circle--animation {
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.lf-progress__circle--progress--animation {
  animation: lf-progress--circle--animation 1.2s linear infinite;
}
</style>
