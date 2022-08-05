<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <div class="container">
          <div class="skinsCard">
            <h-card style="width: 250px; margin: 5px;">
              <p slot="title">
                说明
                说明
                说明
                说明
                说明
              </p>
              <p>说明说明说明说明说明</p>
            </h-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '../components/TopBar.vue'
export default {
  components: {topbar},
}

</script>

<style scoped>
.layout {
  height:100vh;
}
.layout-content {
  background: #dde8f5;
  height: calc(100% - 60px);
}
.container {
  margin: 0 10%;
}
.createInput {
  padding: 20px;
  display: flex;
}
.skinsCard {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>


