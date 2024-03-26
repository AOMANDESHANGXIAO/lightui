<script setup>
import { ref } from 'vue'
import lfInput from '@/components/form/input.vue'

const value = ref('')
</script>

<template>
  <div class="container">
    <lf-input
      placeholder="请输入..."
      name="username"
      type="textarea"
      v-model="value"
      clearable
      :auto-size="{ maxRows: 4, minRows: 2 }"
      width="100%"
    ></lf-input>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 200px;
}
</style>
