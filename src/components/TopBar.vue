<template>
  <h-menu mode="horizontal" active-name="1" class="topbar">
    <div class="topbar-logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
        <span>证券综合金融服务平台</span>
      </router-link>
    </div>
    <div class="topbar-nav">
      <h-menu-item name="1">
        <router-link to="/" style="color: white">首页</router-link>
      </h-menu-item>
      <h-menu-item name="1">
        <router-link to="/" style="color: white">设置</router-link>
      </h-menu-item>
      <h-menu-item name="1">
        <router-link to="/" style="color: white">导出</router-link>
      </h-menu-item>
      <h-menu-item name="1">
        <router-link to="/" style="color: white">说明</router-link>
      </h-menu-item>
    </div>
  </h-menu>
</template>

<script>
export default {

}
</script>

<style>
.topbar {
  background: #037df3 !important;
  display: flex !important;
  width: 100vw !important;
}
.topbar-logo {
  margin-left: 20px;
  display: flex;
  margin-right: 20px;
}
.topbar-logo img {
    max-width: 100%;
    max-height: 30px;
    vertical-align: middle;
}
.topbar-logo span {
    font-size: 15px;
    color: #fff;
    display: inline-block;
    margin-left: 8px;
    white-space: nowrap;
}
</style>