<script setup>
import lfDialog from '@/components/feedback/dialog.vue'
import lfButton from '@/components/basic/button.vue'
import { ref } from 'vue'

const visible = ref(false)

const handleVisible = () => {
  visible.value = true
}
// const handleOpen = () => {
//   console.log('created')
// }
// const handleClose = () => {
//   console.log('closed')
// }
</script>

<template>
  <h2>基础用法-配合v-model使用</h2>
  <div class="row">
    <lf-button @click="handleVisible">Click to open the Dialog</lf-button>
    <lf-dialog v-model="visible" width="500px" top="100px"> </lf-dialog>
  </div>
</template>

<style lang="scss" scoped>
$theme-color: #8e43e7;
.row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid #dcdfe6;
}
h2 {
  margin: 10px 0;
  // margin-left: 10px;
  font-size: 16px;
  color: $theme-color;
}
</style>
