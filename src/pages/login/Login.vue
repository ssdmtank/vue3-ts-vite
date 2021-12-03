<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
    <button @click="handleClick">action修改</button>
    <button @click="handleClick2">patch修改</button>
  </p>
  <div>{{ loginStore.name }}</div>
  <div>{{ loginStore.nameLength }}</div>
</template>
<script setup lang="ts">
import { useLoginStore } from '@/store/modules/login'
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const a = `template1223`

const loginStore = useLoginStore()
console.log('mainStore', loginStore.name)

const handleClick = () => {
  loginStore.setName('qweqw')
}

const handleClick2 = () => {
  loginStore.$patch({
    name: 'waeqe',
  })
}
</script>
<style scoped lang="scss">
a {
  color: #42b983;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: $test-color;
}
</style>
