<template>
  <el-container>
    <el-header>
      <slot name="header"></slot>
    </el-header>

    <slot></slot>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </el-container>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>

<style>
  .el-main, .el-container {
    height: 100%;
  }
</style>
