<script setup>
defineOptions({
  name: 'lf-carousel-item'
})
</script>

<template>
  <div class="lf-carousel-item">
    <div><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/styles/common.scss';
.lf-carousel-item {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $success-color;
  // color: white;
  font-size: 24px;
  transition: all 0.7s;
  // border: 2px solid blue;
}
</style>
