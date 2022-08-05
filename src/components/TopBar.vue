<template>
  <h-menu mode="horizontal"  class="topbar" theme="primary">
    <div class="topbar-logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
        <span>证券综合金融服务平台</span>
      </router-link>
    </div>
    <div class="topbar-nav">
      <router-link to="/" style="color: white">
        <h-menu-item name="1">
          <h-icon name="home"></h-icon>
          首页
        </h-menu-item>
      </router-link>
      <router-link to="/download" style="color: white">
        <h-menu-item name="2">
          <h-icon name="t-b-download"></h-icon>
          导出
        </h-menu-item>
      </router-link>
      <router-link to="/info" style="color: white">
        <h-menu-item name="3">
          <h-icon name="ios-information-outl"></h-icon>
          说明
        </h-menu-item>
      </router-link>
    </div>
  </h-menu>
</template>

<script>
export default {

}
</script>

<style>
.topbar {
  display: flex !important;
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