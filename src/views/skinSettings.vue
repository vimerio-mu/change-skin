<template>
  <div>
    <topbar />
    <div class="layout-content">
      <sidebar/>
      <div class="layout-content-main">
          <router-view></router-view>
          <savebar />
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '../components/TopBar.vue'
import sidebar from '../components/SideBar.vue'
import savebar from '../components/SaveBar.vue'
export default {
  components: {topbar, sidebar, savebar},
  created() {
    console.log(this.$router.history.current.params.name)
  }
}
</script>

<style scoped>
.layout-content {
  background: #dde8f5;
  display: flex;
}
.layout-content-main {
  background: #ffffff;
  margin: 8px;
  flex: 1;
  display: flex;
  padding-bottom: 20px;
}
</style>
