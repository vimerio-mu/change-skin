<template>
  <div class="sidebar">
    <h-menu active-name="1-2" width="auto" :open-names="['1']">
      <h-submenu name="1">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          全局样式
        </template>
        <h-menu-item name="1-1">颜色</h-menu-item>
        <h-menu-item name="1-2">文字</h-menu-item>
        <h-menu-item name="1-3">选项 3</h-menu-item>
      </h-submenu>
      <h-submenu name="3">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          组件规范
        </template>
        <h-menu-item name="3-1">按钮</h-menu-item>
        <h-menu-item name="3-2">列表</h-menu-item>
        <h-menu-item name="3-3">文本框</h-menu-item>
        <h-menu-item name="3-4">下拉框</h-menu-item>
      </h-submenu>
      <h-submenu name="4">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          View类型
        </template>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/alert`}">
          <h-menu-item name="4-1">警告</h-menu-item>
        </router-link>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/badge`}">
          <h-menu-item name="4-2">徽标数</h-menu-item>
        </router-link>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/backtop`}">
          <h-menu-item name="4-3">返回顶部</h-menu-item>
        </router-link>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/calendar`}">
          <h-menu-item name="4-4">日历</h-menu-item>
        </router-link>
      </h-submenu>
      <h-submenu name="5">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          From类型
        </template>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/datepicker`}">
          <h-menu-item name="4-4">日期选择器</h-menu-item>
        </router-link>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/input`}">
          <h-menu-item name="4-4">输入框</h-menu-item>
        </router-link>
      </h-submenu>
      <h-submenu name="5">
        <template slot="title">
          <h-icon name="mail"></h-icon>
          Table类型
        </template>
        <router-link :to="{path:`/skins/${this.$router.history.current.params.name}/editgrid`}">
          <h-menu-item name="4-4">可编辑表格</h-menu-item>
        </router-link>
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
a {
  color: #333;
}
</style>