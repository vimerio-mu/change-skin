<template>
  <div class="sidebar">
    <h-menu active-name="1-2" width="auto" :open-names="['1']">
      <h-submenu name="1">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          全局样式
        </template>
        <h-menu-item name="1-1">选项 1</h-menu-item>
        <h-menu-item name="1-2">选项 2</h-menu-item>
        <h-menu-item name="1-3">选项 3</h-menu-item>
      </h-submenu>
      <h-submenu name="2">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          颜色
        </template>
      </h-submenu>
      <h-submenu name="3">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          文字
        </template>
      </h-submenu>
      <h-submenu name="4">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          组件规范
        </template>
        <h-menu-item name="4-1">按钮</h-menu-item>
        <h-menu-item name="4-2">列表</h-menu-item>
        <h-menu-item name="4-3">文本框</h-menu-item>
        <h-menu-item name="4-4">下拉框</h-menu-item>
      </h-submenu>
    </h-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar {
  color: #333;
  height: 100vh;
  width: 200px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 30%);
  background: #fff;
}
</style>