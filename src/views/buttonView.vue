<script setup>
import lfButton from '@/components/basic/button.vue'
const test = () => {
  console.log('dianjile')
}
</script>

<template>
  <h2>基础按钮</h2>
  <div class="row">
    <lf-button @click="test" debounce>default</lf-button>
    <lf-button type="primary">primary</lf-button>
    <lf-button type="success">success</lf-button>
    <lf-button type="info">info</lf-button>
    <lf-button type="warning">warning</lf-button>
    <lf-button type="danger">danger</lf-button>
  </div>
  <h2>朴素按钮</h2>
  <div class="row">
    <lf-button plain>plain</lf-button>
    <lf-button type="primary" plain>primary</lf-button>
    <lf-button type="success" plain>success</lf-button>
    <lf-button type="info" plain>info</lf-button>
    <lf-button type="warning" plain>warning</lf-button>
    <lf-button type="danger" plain>danger</lf-button>
  </div>
  <h2>圆角按钮</h2>
  <div class="row">
    <lf-button>default</lf-button>
    <lf-button type="primary" round>primary</lf-button>
    <lf-button type="success" round>success</lf-button>
    <lf-button type="info" round>info</lf-button>
    <lf-button type="warning" round>warning</lf-button>
    <lf-button type="danger" round>danger</lf-button>
  </div>
  <h2>按钮图标</h2>
  <div class="row">
    <lf-button icon="lf-icon-xian_shangchuan">default</lf-button>
    <lf-button type="primary" icon="lf-icon-xian_daochu">primary</lf-button>
    <lf-button type="success" icon="lf-icon-xian_fenxiang">success</lf-button>
    <lf-button type="info" icon="lf-icon-xian_guanzhu">info</lf-button>
    <lf-button type="warning" icon="lf-icon-xian_jutishijiantongji">warning</lf-button>
    <lf-button type="danger" icon="lf-icon-xian_chaoshichuli">danger</lf-button>
  </div>
  <div class="row">
    <lf-button icon="lf-icon-xian_shangchuan--right">default</lf-button>
    <lf-button type="primary" icon="lf-icon-xian_daochu--right">primary</lf-button>
    <lf-button type="success" icon="lf-icon-xian_fenxiang--right">success</lf-button>
    <lf-button type="info" icon="lf-icon-xian_guanzhu--right">info</lf-button>
    <lf-button type="warning" icon="lf-icon-xian_jutishijiantongji--right">warning</lf-button>
    <lf-button type="danger" icon="lf-icon-xian_chaoshichuli--right">danger</lf-button>
  </div>
  <h2>圆形按钮搭配图标</h2>
  <div class="row">
    <lf-button circle icon="lf-icon-xian_shangchuan"></lf-button>
    <lf-button type="primary" circle icon="lf-icon-xian_daochu"></lf-button>
    <lf-button type="success" circle icon="lf-icon-xian_fenxiang"></lf-button>
    <lf-button type="info" circle icon="lf-icon-xian_guanzhu"></lf-button>
    <lf-button type="warning" circle icon="lf-icon-xian_jutishijiantongji"></lf-button>
    <lf-button type="danger" circle icon="lf-icon-xian_chaoshichuli"></lf-button>
  </div>
  <h2>普通按钮和朴素按钮被禁用</h2>
  <div class="row">
    <lf-button disabled>default</lf-button>
    <lf-button type="primary" disabled>primary</lf-button>
    <lf-button type="success" disabled>success</lf-button>
    <lf-button type="info" disabled>info</lf-button>
    <lf-button type="warning" disabled>warning</lf-button>
    <lf-button type="danger" disabled>danger</lf-button>
  </div>
  <div class="row">
    <lf-button plain disabled @click="test">plain</lf-button>
    <lf-button type="primary" plain disabled>primary</lf-button>
    <lf-button type="success" plain disabled>success</lf-button>
    <lf-button type="info" plain disabled>info</lf-button>
    <lf-button type="warning" plain disabled>warning</lf-button>
    <lf-button type="danger" plain disabled>danger</lf-button>
  </div>
  <h2>文字按钮</h2>
  <div class="row">
    <lf-button text @click="test">default</lf-button>
    <lf-button text type="primary">primary</lf-button>
    <lf-button text type="success">success</lf-button>
    <lf-button text type="info">info</lf-button>
    <lf-button text type="warning">warning</lf-button>
    <lf-button text type="danger">danger</lf-button>
  </div>
  <div class="row">
    <lf-button text plain>plain</lf-button>
    <lf-button text type="primary" plain>primary</lf-button>
    <lf-button text type="success" plain>success</lf-button>
    <lf-button text type="info" plain>info</lf-button>
    <lf-button text type="warning" plain>warning</lf-button>
    <lf-button text type="danger" plain>danger</lf-button>
  </div>
  <h2>文字按钮禁用</h2>
  <div class="row">
    <lf-button disabled text @click="test">default</lf-button>
    <lf-button disabled text type="primary">primary</lf-button>
    <lf-button disabled text type="success">success</lf-button>
    <lf-button disabled text type="info">info</lf-button>
    <lf-button disabled text type="warning">warning</lf-button>
    <lf-button disabled text type="danger">danger</lf-button>
  </div>
  <div class="row">
    <lf-button disabled text plain>plain</lf-button>
    <lf-button disabled text type="primary" plain>primary</lf-button>
    <lf-button disabled text type="success" plain>success</lf-button>
    <lf-button disabled text type="info" plain>info</lf-button>
    <lf-button disabled text type="warning" plain>warning</lf-button>
    <lf-button disabled text type="danger" plain>danger</lf-button>
  </div>
  <h2>加载动画</h2>
  <div class="row">
    <lf-button loading @click="test">default</lf-button>
    <lf-button loading type="primary">primary</lf-button>
    <lf-button loading type="success">success</lf-button>
    <lf-button loading type="info">info</lf-button>
    <lf-button loading type="warning">warning</lf-button>
    <lf-button loading type="danger">danger</lf-button>
  </div>
  <div class="row">
    <lf-button round loading @click="test">default</lf-button>
    <lf-button round loading type="primary">primary</lf-button>
    <lf-button round loading type="success">success</lf-button>
    <lf-button round loading type="info">info</lf-button>
    <lf-button round loading type="warning">warning</lf-button>
    <lf-button round loading type="danger">danger</lf-button>
  </div>
</template>

<style lang="scss" scoped>
$theme-color: #8e43e7;
.row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .lf-button {
    margin-left: 10px;
  }
}
h2 {
  margin: 10px 0;
  margin-left: 10px;
  font-size: 16px;
  color: $theme-color;
}
</style>
