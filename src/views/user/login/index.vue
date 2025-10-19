<script setup lang="ts">
import { createProForm } from 'pro-naive-ui'
import setting from '@/settings/projectSetting'
import IKun from './ikun.vue'

const notification = useNotification()
const userStore = useUserStore()
const title = setting.app.title

const { loginLoading: loading } = storeToRefs(userStore)

const form = createProForm({
  initialValues: {
    username: 'admin',
    password: '123456',
    rememberMe: true,
  },
  onSubmit: async (values) => {
    // console.log(values)
    try {
      const user = await userStore.login(values)
      notification.success({
        title: '登录成功',
        content: `欢迎回来，${user.name}`,
        duration: 2000,
      })
    }
    catch (error: any) {
      notification.error({
        title: '登录失败',
        content: error.message,
        duration: 2000,
      })
    }
  },
})
</script>

<template>
  <div class="h-screen w-full flex bg-white">
    <!-- 左侧区域 -->
    <div class="relative hidden w-[62%] overflow-hidden lg:flex">
      <!-- 主背景 -->
      <div
        class="absolute inset-0 blur-2xl"
        :style="{
          background: 'linear-gradient(154deg,#07070915 30%,#D5E6FF 60%,#07070915 10%)',
        }"
      />
      <div class="relative z-10 w-full flex flex-col">
        <div class="flex items-center gap-3 p-8">
          <img
            src="@/assets/svg/logo.svg"
            alt="Logo"
            class="h-8 w-8"
          >
          <span class="text-xl text-gray-800 font-semibold">{{ title }}</span>
        </div>
        <div class="flex flex-grow items-center justify-center">
          <div class="mt-[-100px] max-w-[480px] w-[85%]">
            <div class="login-illustration relative">
              <div class="relative z-10">
                <i-kun />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧登录区域 -->
    <div class="w-full flex flex-col bg-white lg:w-[38%]">
      <div class="flex flex-grow items-center justify-center">
        <div class="max-w-[420px] w-full px-6 lg:px-12">
          <div class="mb-12 flex items-center justify-center gap-2 lg:hidden">
            <img
              src="@/assets/svg/logo.svg"
              alt="Logo"
              class="h-8 w-8"
            >
            <span class="text-xl text-gray-900 font-semibold">{{ title }}</span>
          </div>

          <div class="mb-12">
            <h1 class="text-3xl text-gray-900 font-bold">
              账号登录
            </h1>
            <p class="mt-3 text-base text-gray-500">
              请使用您的账号密码登录系统
            </p>
          </div>

          <!-- 表单区域 -->
          <pro-form
            :form="form"
            size="large"
            :loading="loading"
            label-placement="left"
          >
            <pro-input
              required
              path="username"
              placeholder="请输入用户名"
            />
            <pro-password
              required
              path="password"
              placeholder="请输入密码"
              :field-props="{
                showPasswordOn: 'click',
              }"
            />
            <div class="mb-6 flex items-center justify-between">
              <pro-checkbox
                path="rememberMe"
                size="small"
                :show-feedback="false"
              >
                记住我
              </pro-checkbox>
              <n-button
                text
                type="primary"
              >
                忘记密码？
              </n-button>
            </div>

            <n-button
              type="primary"
              block
              size="large"
              :loading="loading"
              @click="form.submit"
            >
              {{ loading ? '登录中...' : '登录' }}
            </n-button>

            <div class="mt-8 text-center text-sm text-gray-500">
              还没有账号？
              <n-button
                text
                type="primary"
                class="font-medium"
              >
                立即注册
              </n-button>
            </div>
          </pro-form>
        </div>
      </div>

      <div class="p-8 text-center text-sm text-gray-500">
        Copyright © 2025 {{ title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-illustration {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
