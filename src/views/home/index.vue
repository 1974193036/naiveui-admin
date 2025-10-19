<script setup lang="ts">
const userStore = useUserStore()

const { user } = storeToRefs(userStore)

// 当前日期
const formattedDate = computed(() => {
  const date = new Date()
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
})
</script>

<template>
  <div class="home-page">
    <!-- 欢迎区域 -->
    <div class="mb-3">
      <n-card class="bg-white/90 backdrop-blur-sm">
        <div class="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div class="flex items-center">
            <div class="mr-4 h-14 w-14 flex items-center justify-center">
              <img
                src="@/assets/svg/logo.svg"
                alt="Logo"
                class="size-full"
              >
            </div>
            <div>
              <h1 class="mb-2 text-xl font-medium md:text-2xl">
                欢迎回来，{{ user.name }}
              </h1>
              <p class="text-gray-500">
                今天是 {{ formattedDate }}
              </p>
            </div>
          </div>
          <div class="mt-4 flex items-center md:mt-0">
            <div class="flex items-center">
              <div class="px-4 text-center">
                <div class="text-lg font-semibold">
                  18
                </div>
                <div class="mt-1 text-xs text-gray-500">
                  已完成
                </div>
              </div>
              <div class="mx-2 h-10 w-px bg-gray-200" />
              <div class="px-4 text-center">
                <div class="text-lg font-semibold">
                  6
                </div>
                <div class="mt-1 text-xs text-gray-500">
                  进行中
                </div>
              </div>
              <div class="mx-2 h-10 w-px bg-gray-200" />
              <div class="px-4 text-center">
                <div class="text-lg font-semibold">
                  3
                </div>
                <div class="mt-1 text-xs text-gray-500">
                  新消息
                </div>
              </div>
            </div>
          </div>
        </div>
      </n-card>
    </div>
  </div>
</template>
