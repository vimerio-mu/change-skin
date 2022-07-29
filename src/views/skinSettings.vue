<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <sidebar/>
        <div class="layout-content-main">
            <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px"/>
            <componentSettings style="flex:1;padding:8px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '../components/TopBar.vue'
import sidebar from '../components/SideBar.vue'
import componentPreview from '../components/ComponentPreview.vue'
import componentSettings from '../components/ComponentSettings.vue'
export default {
  components: {topbar, sidebar, componentPreview, componentSettings},
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
  margin-left: 8px;
  flex: 1;
  display: flex;
}
</style>
