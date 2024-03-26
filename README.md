# lightful-ui

使用技术栈：Vue3+Sass。

# 1. Basic基础组件开发

## Button 按钮

| 参数名   | 参数描述                                                     | 参数类型 | 默认值  |
| -------- | ------------------------------------------------------------ | -------- | ------- |
| type     | 按钮类型(primary/success/info/warning/danger)                | string   | default |
| plain    | 是否为朴素按钮                                               | boolean  | false   |
| round    | 是否为圆角按钮                                               | boolean  | false   |
| circle   | 是否为圆圈                                                   | boolean  | false   |
| icon     | 图标代码，填写后显示图标。代码后添加--left后缀显示左侧，添加--right显示右侧。默认显示左侧。 | string   | ''      |
| disabled | 是否被禁用                                                   | boolean  | false   |
| text     | 是否为文字按钮                                               | boolean  | false   |
| loading  | 是否使用加载动画(加载时禁止点击)                             | boolean  | false   |
| debounce | 是否进行防抖                                                 | boolean  | false   |

## Link 链接

### 参数

| 参数名    | 参数描述       | 参数类型 | 可选参数                                                     | 默认参数 |
| --------- | -------------- | -------- | ------------------------------------------------------------ | -------- |
| type      | 链接类型       | enum     | 'primary'\|'success'\|'warning'\|'danger'\|'info'\|'default' | default  |
| underline | 是否下划线     | Boolean  | -                                                            | true     |
| disabled  | 是否禁用       | Boolean  | -                                                            | false    |
| href      | 原生href属性   | String   | -                                                            | -        |
| target    | 原生target属性 | enum     | '_self' \| '_blank'                                          | _self    |

### 示范代码

```vue
<script setup>
import lfLink from '@/components/basic/link.vue'
</script>

<template>
  <div class="lf-link-demo">
    <lf-link href="https://element-plus.org" target="_blank"> default </lf-link>
    <lf-link href="https://element-plus.org" target="_blank" type="primary"> primary </lf-link>
    <lf-link href="https://element-plus.org" target="_blank" type="success"> success </lf-link>
    <lf-link href="https://element-plus.org" target="_blank" type="warning"> warning </lf-link>
    <lf-link href="https://element-plus.org" target="_blank" type="danger"> danger </lf-link>
    <lf-link href="https://element-plus.org" target="_blank" type="info"> info </lf-link>
  </div>
  <div class="lf-link-demo">
    <lf-link href="https://element-plus.org" target="_blank" :underline="false"> default </lf-link>
  </div>
</template>

<style lang="scss" scoped>
.lf-link-demo {
  width: 500px;
  // height: 200px;
  .lf-link {
    margin-right: 10px;
  }
}
</style>
```

## layout 布局

使用方式： lf-row配合lf-col使用。

### lf-row参数

| 参数名  | 参数描述                           | 参数类型 | 可选参数                                              | 默认参数 |
| ------- | ---------------------------------- | -------- | ----------------------------------------------------- | -------- |
| gap     | 控制lf-col之间的间隔, 以像素为单位 | Number   | -                                                     | 0        |
| justify | 控制flex布局的水平对齐方式         | enum     | start\|end\|space-between\|space-evenly\|space-around | start    |
| align   | 控制flex布局的垂直对齐方式         | enum     | top \| middle \| bottom                               | top      |

### lf-col参数

| 参数名 | 参数描述                 | 参数类型 | 可选参数 | 默认参数 |
| ------ | ------------------------ | -------- | -------- | -------- |
| span   | 控制占据多少份数的el-row | Number   | -        | 0        |
| offset | 控制向左的偏移栏数       | Number   | -        | 0        |

### lf-col 插槽

| 参数名  | 参数描述       |
| ------- | -------------- |
| default | 自定义默认内容 |

## text 文本

### 参数

| 参数名     | 参数描述       | 参数类型      | 可选参数                                        | 默认参数 |
| ---------- | -------------- | ------------- | ----------------------------------------------- | -------- |
| type       | 类型           | enum          | primary \| success \| warning \| danger \| info | default  |
| size       | 文字大小       | enum          | large \| default \| small                       | default  |
| tag        | 自定义元素标签 | string        | -                                               | span     |
| truncated  | 显示省略符     | Boolean       | -                                               | false    |
| line-clamp | 最大行数       | String/Number | -                                               | -        |

### 插槽

| 插槽名  | 描述     |
| ------- | -------- |
| default | 默认内容 |

### 演示代码

```vue
<script setup>
import lfText from '@/components/basic/text.vue'
</script>

<template>
  <div class="demo-row">
    <lf-text>default</lf-text>
    <lf-text size="large">large</lf-text>
    <lf-text size="small">small</lf-text>
  </div>
  <div class="demo-row">
    <lf-text>default</lf-text>
    <lf-text type="primary">primary</lf-text>
    <lf-text type="success">successall</lf-text>
    <lf-text type="danger">danger</lf-text>
    <lf-text type="warning">warning</lf-text>
    <lf-text type="info">info</lf-text>
  </div>
  <div class="demo-row">
    <lf-text>default</lf-text>
    <lf-text tag="b">b</lf-text>
    <lf-text tag="i">i</lf-text>
    <lf-text tag="p">p</lf-text>
    <lf-text tag="ins">ins</lf-text>
    <lf-text tag="del">del</lf-text>
    <lf-text tag="mark">mark</lf-text>
    <lf-text tag="sub">sub</lf-text>
    <lf-text tag="sup">sup</lf-text>
  </div>
  <div class="demo-row-t">
    <lf-text line-clamp="2"
      >defaultdefaultdefaultdefaultdefaultdefaultdefaultdefaultdefaultdefault</lf-text
    >
  </div>
</template>

<style lang="scss">
.demo-row {
  display: flex;
  gap: 10px;
  // align-items: center;
  margin-bottom: 30px;
}
.demo-row-t {
  width: 100px;
}
</style>
```

## title 标题

### 参数

| 参数名       | 参数描述       | 参数类型 | 可选参数           | 默认参数 |
| ------------ | -------------- | -------- | ------------------ | -------- |
| size         | 控制标题的大小 | enum     | normal/small/large | normal   |
| decorate     | 是否需要装饰   | boolean  | -                  | true     |
| linear-color | 使用渐变色标题 | Array    | -                  | null     |

### 插槽

| 插槽名  | 描述     |
| ------- | -------- |
| default | 标题内容 |

### 演示代码

```vue
<script setup>
import lfH from '@/components/basic/h.vue'
</script>

<template>
  <lf-h>渐进式框架 normal</lf-h>
  <lf-h size="large">渐进式框架 large</lf-h>
  <lf-h size="small" :linear-color="['#FEAC5E', '#C779D0', '#4BC0C8']">渐进式框架 small</lf-h>
</template>

<style lang="scss">
.demo-row {
  display: flex;
  gap: 10px;
  // align-items: center;
  margin-bottom: 30px;
}
.demo-row-t {
  width: 100px;
}
</style>
```

# 2. Feedback反馈组件开发

## Dialog 对话框

### 参数

| 参数名           | 参数描述                                    | 参数类型 | 默认参数 |
| ---------------- | ------------------------------------------- | -------- | -------- |
| v-model          | 通过v-model绑定控制dialog显示或者隐藏的参数 | boolean  | false    |
| title            | dialog显示的标题                            | string   | 'Tips'   |
| width            | dialog的宽度                                | string   | '500px'  |
| top              | dialog距离顶部的高度                        | string   | '15vh'   |
| show-close       | 是否显示关闭按钮                            | boolean  | false    |
| background-color | dialog的背景颜色，默认为白色                | string   | 'white'  |
| draggable        | 是否能够拖拽对话框                          | boolean  | false    |

### 插槽

| 插槽名 | 功能         |
| ------ | ------------ |
| title  | dialog的标题 |
| footer | dialog的底部 |
| -      | dialog的内容 |

### 事件

| 时间名 | 说明           |
| ------ | -------------- |
| open   | dialog打开事件 |
| close  | dialog关闭事件 |

### 演示代码

```vue
<script setup>
import lfCol from '@/components/basic/col.vue'
import lfRow from '@/components/basic/row.vue'
</script>

<template>
  <div class="test-row">
    <lf-row :gap="10" justify="space-between" align="bottom">
      <lf-col :span="8"><div class="grid-content bg-dark" /></lf-col>
      <lf-col :span="8" :offset="5"><div class="grid-content bg-light" /></lf-col>
      <!-- <lf-col :span="8"><div class="grid-content bg-dark" /></lf-col> -->
    </lf-row>
  </div>
</template>

<style lang="scss">
.test-row {
  width: 500px;
  height: 200px;
  background-color: pink;
}
.lf-row {
  background-color: skyblue;
  height: 100%;
}
.grid-content {
  width: 100%;
  height: 50%;
}
.bg-dark {
  background-color: #99a9bf;
}
.bg-light {
  background-color: #e5e9f2;
}
</style>
```



# 3. Form表单组件开发

## input 输入框

| 参数名        | 参数描述                         | 参数类型 | 默认参数       |
| ------------- | -------------------------------- | -------- | -------------- |
| v-model       | 通过v-model绑定input的value      | string   | boolean        |
| type          | 控制input框的类型。text/textarea | string   | 'text'         |
| placeholder   | 控制提示词                       | string   | 'Please Input' |
| name          | 支持表单组件name属性             | string   | ''             |
| clearable     | 支持一键清空input内容            | boolean  | false          |
| `disabled`    | 禁用输入框                       | boolean  | false          |
| show-password | 支持查看密码框的文本             | boolean  | false          |
| width         | 控制文本框的宽度                 | string   | '100%'         |
| prefix-icon   | 是否显示前缀图标，填写icon名     | string   | ''             |
| suffix-icon   | 是否显示后缀图标，填写icon名     | string   | ''             |

当你将`type`填写为`textarea`时会将input组件转换为原生的`textarea`组件。当input为文本域时，它不再支持show-password, prefix-icon, suffix-icon这三个参数。它将支持以下参数。

| 参数名   | 参数描述                                                     | 参数类型 | 默认参数 |
| -------- | ------------------------------------------------------------ | -------- | -------- |
| autosize | 让textarea根据内容自适应高度,你需要在一个对象中传入一个最小行数minRows,以及一个最大行数maxRows。实例：{minRows:2, maxRows: 10}。PS：该功能默认添加防抖。 | Object   | {}       |

## switch 选择器

| 参数名        | 参数描述                          | 参数类型 | 默认参数 |
| ------------- | --------------------------------- | -------- | -------- |
| v-model       | 通过v-model来绑定开关的打开和关闭 | Boolean  | false    |
| onColor       | 控制按钮打开时的背景颜色          | String   | ''       |
| offColor      | 控制按钮关闭时的背景颜色          | String   | ''       |
| size          | 控制按钮的大小 (large/small)      | String   | ''       |
| name          | switch对应的name属性              | String   | ''       |
| inactive-text | 不活跃时，选择器左侧的文字提示    | String   | ''       |
| active-text   | 活跃时，选择器右侧的文字提示      | String   | ''       |
| inline-prompt | 控制文本提示是否显示在点内        | Boolean  | false    |
| disabled      | 是否禁用该选择器                  | Boolean  | false    |

## radio 单选框

需要搭配radio-group组件使用。

### radio参数

| 参数名   | 描述            | 类型                  | 可选 | 默认  |
| -------- | --------------- | --------------------- | ---- | ----- |
| value    | radio选择框的值 | Array\|String\|Number | -    | ''    |
| disabled | 是否禁用        | boolean               | -    | false |

### radioGroup参数

| 参数名  | 描述                    | 类型                           | 可选 | 默认 |
| ------- | ----------------------- | ------------------------------ | ---- | ---- |
| v-model | 绑定当前radio选择器的值 | Array\|String\|Boolean\|Number | -    | ''   |

# 4. 数据展示组件开发

## Carousel走马灯

### 参数

| 参数名             | 参数描述                                                     | 参数类型 | 可选参数                   | 默认参数 |
| ------------------ | ------------------------------------------------------------ | -------- | -------------------------- | -------- |
| height             | 控制走马灯的高度                                             | String   | -                          | ''       |
| initial-index      | 初始状态激活的幻灯片的索引，从0开始                          | number   | -                          | 0        |
| autoplay           | 是否自动切换                                                 | boolean  | -                          | true     |
| interval           | 自动切换的时间间隔，单位为毫秒                               | number   | -                          | 3000     |
| indicator-position | 指示器的位置, 当设置为左右时，切换箭头会被自动调换为上下显示 | string   | top/bottom/left/right/none | none     |

## Progress 进度条

### 参数

| 参数名            | 参数描述                                                     | 参数类型       | 可选参数                          | 默认参数 |
| ----------------- | ------------------------------------------------------------ | -------------- | --------------------------------- | -------- |
| type              | 控制进度条的形状                                             | String         | circle/line                       | line     |
| status            | 控制进度条的颜色                                             | String         | primary/success/warning/exception | primary  |
| show-text-outside | 仅type为line时可用，是否自动显示进度条百分比文字提示于右侧   | Boolean        | -                                 | false    |
| show-text-inside  | 仅type为line时可用，是否自动显示进度条百分比文字提示于进度条的内部。可以通过.lf-progress__line--inside 类名来修改文字的大小和颜色。 | Boolean        | -                                 | false    |
| stroke-width      | 控制进度条的高度(line)/宽度(circle)                          | Number         | -                                 | 6        |
| color             | 允许你根据进度情况控制进度条的颜色,可以传入一个数组或者函数  | Array/Function | -                                 | null     |
| linear-color      | 允许使用渐变色进度条, 将想要使用的渐变颜色分别以16进制的字符串放入数组中即可。线性渐变属性的优先级高度linear-color | Array          | -                                 | null     |
| indeterminate     | 是否为动画进度条。对于线性进度条和环形进度条都分别提供了一个加载动画。 | Boolean        | -                                 | false    |

### 插槽

| 插槽名  | 说明                                         |
| ------- | -------------------------------------------- |
| inside  | 仅线性进度条可用，进度条内部显示内容         |
| outside | 仅线性进度条可用，进度条外部显示内容         |
| default | 仅环形进度条可用，在环形进度条中间显示内容。 |

```vue
<script setup>
// import { ref } from 'vue'
// import lfSwitch from '@/components/form/switch.vue'
// import lfCarousel from '@/components/data/carousel.vue'
// import lfCarouselItem from '@/components/data/carouselItem.vue'
// const checked = ref(false)
import lfProgress from '@/components/data/progress.vue'
import lfButton from '@/components/basic/button.vue'
import { ref } from 'vue'

const percentage = ref(0)

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 }
]

const customColorMethod = (percentage) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  // console.log('颜色函数被执行了...')
  return '#67c23a'
}
</script>

<template>
  <div class="box">
    <lf-progress
      :percentage="percentage"
      status="warning"
      showTextOutside
      :stroke-width="10"
      :color="customColors"
      :linear-color="['#4BC0C8', '#C779D0', '#FEAC5E']"
    >
    </lf-progress>
    <lf-progress
      :percentage="percentage"
      showTextOutside
      type="circle"
      :stroke-width="10"
      status="danger"
      :color="customColorMethod"
      :linear-color="['#4BC0C8', '#C779D0', '#FEAC5E']"
    >
    </lf-progress>
    <div class="row">
      <lf-button type="primary" @click="percentage += 10" plain>增加</lf-button>
      <lf-button type="danger" @click="percentage -= 10" plain>减小</lf-button>
    </div>
  </div>
  <!-- <lf-carousel indicator-position="left">
    <lf-carousel-item>1</lf-carousel-item>
    <lf-carousel-item>2</lf-carousel-item>
    <lf-carousel-item>3</lf-carousel-item>
  </lf-carousel> -->
</template>

<style scoped>
.row {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.box {
  width: 400px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
```

## collapse折叠面板

collapse需要结合collapse-item来使用。

### collapse参数

| 参数名    | 参数描述                  | 参数类型      | 可选参数 | 默认参数 |
| --------- | ------------------------- | ------------- | -------- | -------- |
| v-model   | 通过v-model绑定activeName | String/Number | -        | -        |
| accordion | 是否采用手风琴模式        | Boolean       | -        | false    |

### collapse-item参数

| 参数名 | 参数描述   | 参数类型      | 可选参数 | 默认参数 |
| ------ | ---------- | ------------- | -------- | -------- |
| title  | 面板标题   | string        | -        | -        |
| name   | 唯一标识符 | string/number | -        | -        |

### collapse item solt 插槽

| 插槽名  | 说明                |
| ------- | ------------------- |
| default | Collapse Item的内容 |
| title   | Collapse Item的标题 |

### 演示

```vue
<script setup>
import lfCollapse from '@/components/data/collapse.vue'
import lfCollapseItem from '@/components/data/collapseItem.vue'
import { ref } from 'vue'

const activeName = ref('third')
</script>

<template>
  <div class="lf-collapse-demo">
    <lf-collapse v-model="activeName" accordion>
      <lf-collapse-item title="MyName" :name="'first'">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </lf-collapse-item>
      <lf-collapse-item title="YourName" :name="'second'">
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </lf-collapse-item>
      <lf-collapse-item title="HisName" :name="'third'">
        <template #title>你好哈哈哈</template>
        <template #default>
          <div>
            Consistent within interface: all elements should be consistent, such as: design style,
            icons and texts, position of elements, etc.
          </div></template
        >
      </lf-collapse-item>
    </lf-collapse>
  </div>
</template>

<style lang="scss" scoped>
.lf-collapse-demo {
  width: 500px;
  height: 200px;
}
</style>
```

