<script setup lang="ts">
import { ref } from 'vue'
import myButton from './Button';
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="bg-red-200 mt-4 aa">
  <myButton/>
    <button class="button" type="button" @click="count++">count is {{ count }}</button>
  </div>

</template>

<style scoped lang="scss">
.aa{
 color: theme('colors.white')
}
.read-the-docs {
  color: #888;
}
</style>
