<script setup>
const count = ref(0)
// const message = useMessage()
function handleClick() {
  count.value++
  // message.success('成功')
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
  <div @click="handleClick">
    login
    <h1 class="text-red">
      123--{{ count }}
    </h1>
  </div>
</template>
