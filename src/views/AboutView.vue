<script setup>
import { ref } from 'vue'

const count = ref(0)

function handleClick() {
  count.value++
}

const EXTC = 1
const EXTC2 = () => 123
console.log(EXTC)
console.log(EXTC2())
console.log([[1], [2], 3].flat())
console.log([1, 2, 3].includes(2))
console.log([1, 2, 3].filter(v => v > 1))
const b = new Map()
b.set(1, 2)
b.set(3, 4)
console.log(b)
</script>

<template>
  <div class="about">
    <h1 class="h1">
      This is an about page
    </h1>
    <h1 class="h1">
      This is an about page
    </h1>
    <h1 class="text-60px text-red flex-center">
      This is an about page33
    </h1>
    <h1 class="h1 flex text-30px">
      This is an about page
    </h1>
    <h3 class="my-30px text-30px text-[#ff0000]">
      {{ count }}
    </h3>
    <el-button @click="handleClick">
      加1
    </el-button>
  </div>
</template>

<style scoped>
.h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
