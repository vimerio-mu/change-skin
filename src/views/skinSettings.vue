<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <sidebar/>
        <div class="layout-content-main">
          <!-- 组件预览 -->
            <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
              <titledContainer title="品牌色">
              <ul class="btn-list">
                <skinsColorButton :btnState="'Default'" :color="btnDefaultBg"/>
                <skinsColorButton :btnState="'Hover'" :color="btnDefaultHoverBgcolor"/>
                <skinsColorButton :btnState="'Pressed'" :color="btnDefaultPressBgcolor"/>
              </ul>
              </titledContainer>
              <titledContainer title="功能色">
                <!-- 信息色 -->
                <ul class="btn-list">
                <skinsColorButton :btnState="'Default'" :color="btnInfoBg"/>
                <skinsColorButton :btnState="'Hover'" :color="btnInfoHoverBgcolor"/>
                <skinsColorButton :btnState="'Pressed'" :color="btnInfoPressBgcolor"/>
              </ul>
              <!-- 成功色 -->
              <ul class="btn-list">
                <skinsColorButton :btnState="'Default'" :color="btnSuccessBg"/>
                <skinsColorButton :btnState="'Hover'" :color="btnSuccessHoverBgcolor"/>
                <skinsColorButton :btnState="'Pressed'" :color="btnSuccessPressBgcolor"/>
              </ul>
              <!-- 警告色 -->
              <ul class="btn-list">
                <skinsColorButton :btnState="'Default'" :color="btnWarningBg"/>
                <skinsColorButton :btnState="'Hover'" :color="btnWarningHoverBgcolor"/>
                <skinsColorButton :btnState="'Pressed'" :color="btnWarningPressBgcolor"/>
              </ul>
              <!-- 错误色 -->
              <ul class="btn-list">
                <skinsColorButton :btnState="'Default'" :color="btnErrorBg"/>
                <skinsColorButton :btnState="'Hover'" :color="btnErrorHoverBgcolor"/>
                <skinsColorButton :btnState="'Pressed'" :color="btnErrorPressBgcolor"/>
              </ul>
              </titledContainer>
            </componentPreview>
            <!-- 组件修改 -->
            <componentSettings style="flex:1;padding:8px">
              <titledContainer title="品牌色">
                <ul class="settings-list">
                  <!-- title: 表示品牌色 -->
                  <settingsItem :title="'default'" :btnState="'默认'" :color="btnDefaultBg"/>
                  <settingsItem :title="'default'" :btnState="'滑过'" :color="btnDefaultHoverBgcolor"/>
                  <settingsItem :title="'default'" :btnState="'按下'" :color="btnDefaultPressBgcolor"/>
                </ul>
              </titledContainer>
              <titledContainer title="品牌色">
                <!-- title表示信息色、成功色、警告色、错误色 -->
                  <settingsTitle :title="'信息色'"/>
                  <ul class="settings-list">
                      <settingsItem :title="'info'" :btnState="'默认'" :color="btnInfoBg"/>
                      <settingsItem :title="'info'" :btnState="'滑过'" :color="btnInfoHoverBgcolor"/>
                      <settingsItem :title="'info'" :btnState="'按下'" :color="btnInfoPressBgcolor"/>
                  </ul>
                  <settingsTitle :title="'成功色'"/>
                  <ul class="settings-list">
                      <settingsItem :title="'success'" :btnState="'默认'" :color="btnSuccessBg"/>
                      <settingsItem :title="'success'" :btnState="'滑过'" :color="btnSuccessHoverBgcolor"/>
                      <settingsItem :title="'success'" :btnState="'按下'" :color="btnSuccessPressBgcolor"/>
                  </ul>
                  <settingsTitle :title="'警告色'"/>
                  <ul class="settings-list">
                      <settingsItem :title="'warning'" :btnState="'默认'" :color="btnWarningBg"/>
                      <settingsItem :title="'warning'" :btnState="'滑过'" :color="btnWarningHoverBgcolor"/>
                      <settingsItem :title="'warning'" :btnState="'按下'" :color="btnWarningPressBgcolor"/>
                  </ul>
                  <settingsTitle :title="'错误色'"/>
                  <ul class="settings-list">
                      <settingsItem :title="'error'" :btnState="'默认'" :color="btnErrorBg"/>
                      <settingsItem :title="'error'" :btnState="'滑过'" :color="btnErrorHoverBgcolor"/>
                      <settingsItem :title="'error'" :btnState="'按下'" :color="btnErrorPressBgcolor"/>
                  </ul>
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
import skinsColorButton from '../components/SkinsColorButton.vue'
import { mapState } from 'vuex'
export default {
  components: {topbar, sidebar, componentPreview, componentSettings,titledContainer,settingsTitle,settingsItem,skinsColorButton},
  data () {
    return {
      btnStates:['Default','Hover','Pressed'],
    }
  },
  computed: {
    ...mapState('button',[
      'btnDefaultBg',
      'btnDefaultHoverBgcolor',
      'btnDefaultPressBgcolor',
      'btnInfoBg',
      'btnInfoHoverBgcolor',
      'btnInfoPressBgcolor',
      'btnSuccessBg',
      'btnSuccessHoverBgcolor',
      'btnSuccessPressBgcolor',
      'btnWarningBg',
      'btnWarningHoverBgcolor',
      'btnWarningPressBgcolor',
      'btnErrorBg',
      'btnErrorHoverBgcolor',
      'btnErrorPressBgcolor',
      ])
  },
  created() {
    console.log(this.$router.history.current.params.name)
  },
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
.btn-list{
    display: flex;
    justify-content: space-around;
    margin: 16px auto;
}
</style>
