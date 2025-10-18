<script>
export default {
  name: 'HomeView',
  components: {},
  methods: {
    handleClick() {
      // this.$message.success('成功')
      // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     this.$message({
      //       type: 'success',
      //       message: '删除成功!'
      //     });
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '已取消删除'
      //     });
      //   });
    },
  },
}
</script>

<template>
  <div class="home">
    <n-grid
      :x-gap="12"
      :y-gap="8"
      :cols="4"
    >
      <n-grid-item>
        <n-space>
          <n-button>Default</n-button>
          <n-button type="tertiary">
            Tertiary
          </n-button>
          <n-button type="primary">
            Primary
          </n-button>
          <n-button type="info">
            Info
          </n-button>
          <n-button type="success">
            Success
          </n-button>
          <n-button type="warning">
            Warning
          </n-button>
          <n-button type="error">
            Error
          </n-button>
        </n-space>
      </n-grid-item>
    </n-grid>
    <n-grid
      :x-gap="12"
      :y-gap="8"
      :cols="4"
    >
      <n-grid-item>
        <n-space>
          <n-button
            strong
            secondary
          >
            Default
          </n-button>
          <n-button
            strong
            secondary
            type="tertiary"
          >
            Tertiary
          </n-button>
          <n-button
            strong
            secondary
            type="primary"
          >
            Primary
          </n-button>
          <n-button
            strong
            secondary
            type="info"
          >
            Info
          </n-button>
        </n-space>
      </n-grid-item>
    </n-grid>
  </div>
</template>
