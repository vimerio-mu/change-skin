<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <sidebar/>
        <div class="layout-content-main">
            <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
              <titledContainer title="品牌色">
                <skinsColorButtonList/>
              </titledContainer>
              <titledContainer title="功能色">
                <skinsColorButtonList v-for="(title,index) in colorTitles" :key="index"/>
              </titledContainer>
            </componentPreview>
            <componentSettings style="flex:1;padding:8px">
              <titledContainer title="品牌色">
                <ul class="settings-list">
                    <settingsItem v-for="(state,index) in btnStates" :key="index" :btnState="state"/>
                </ul>
              </titledContainer>
              <titledContainer title="品牌色">
                <div v-for="(title,index) in colorTitles" :key="index">
                  <settingsTitle :title="title"/>
                  <ul class="settings-list">
                      <settingsItem v-for="(state,index) in btnStates" :key="index" :btnState="state"/>
                  </ul>
                </div>
              </titledContainer>
            </componentSettings>
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
import titledContainer from '../components/TitledContainer.vue'
import settingsTitle from '../components/SettingsTitle.vue'
import settingsItem from '../components/SettingsItem.vue'
import skinsColorButtonList from '../components/SkinsColorButtonList.vue'
export default {
  components: {topbar, sidebar, componentPreview, componentSettings,titledContainer,settingsTitle,settingsItem,skinsColorButtonList},
  created() {
    console.log(this.$router.history.current.params.name)
  },
  data() {
    return {
      btnStates:['默认','滑过','按下'],
      colorTitles:['信息色','成功色','警告色','错误色'],
    }
  },
  computed: {
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
