<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <sidebar />
        <div class="layout-content-main">
          <!-- 组件预览 -->
          <componentPreview
            :skinName="this.$router.history.current.params.name"
            style="flex: 2; padding: 8px"
          >
            <titledContainer title="品牌色">
              <ul class="btn-list">
                <skinsColorCard v-for="pc in primaryColor.arr" :colorItem="pc"/>
              </ul>
            </titledContainer>
            <titledContainer title="功能色">
              <ul>
                <li v-for="sc in secondaryColors">
                  <ul class="btn-list">
                    <skinsColorCard v-for="colorItem in sc.arr" :colorItem="colorItem"/>
                  </ul>
                </li>
              </ul>
            </titledContainer>
          </componentPreview>
          <!-- 组件修改 -->
          <componentSettings style="flex: 1; padding: 8px">
            <titledContainer title="品牌色">
              <ul>
                <settingsItem v-for="colorItem in primaryColor.arr" :colorItem="colorItem" :btnTitle="primaryColor.title" />
              </ul>
            </titledContainer>
            <titledContainer title="品牌色">
              <ul>
                <li v-for="sc in secondaryColors">
                  <settingsTitle :title="sc.title"/>
                  <ul>
                    <settingsItem v-for="colorItem in sc.arr" :colorItem="colorItem" :btnTitle="sc.title"/>
                  </ul>
                </li>
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
import skinsColorCard from '../components/SkinsColorCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    topbar,
    sidebar,
    componentPreview,
    componentSettings,
    titledContainer,
    settingsTitle,
    settingsItem,
    skinsColorCard,
  },
  computed: {
    ...mapState('button', [
      'btnPrimaryBg',
      'btnPrimaryHoverBgcolor',
      'btnPrimaryPressBgcolor',
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
    ]),
    primaryColor() {
      return {
        title: '品牌色',
        arr: [
          { btnState: '默认', color: this.btnPrimaryBg },
          { btnState: '滑过', color: this.btnPrimaryHoverBgcolor },
          { btnState: '按下', color: this.btnPrimaryPressBgcolor },
        ],
      }
    },
    secondaryColors(){
      return [
        {
          title:'信息色',
          arr:[
            { btnState: '默认', color: this.btnInfoBg },
            { btnState: '滑过', color: this.btnInfoHoverBgcolor },
            { btnState: '按下', color: this.btnInfoPressBgcolor },
          ]
        },
        {
          title:'成功色',
          arr:[
            { btnState: '默认', color: this.btnSuccessBg },
            { btnState: '滑过', color: this.btnSuccessHoverBgcolor },
            { btnState: '按下', color: this.btnSuccessPressBgcolor },
          ]
        },
        {
          title:'警告色',
          arr:[
            { btnState: '默认', color: this.btnWarningBg },
            { btnState: '滑过', color: this.btnWarningHoverBgcolor },
            { btnState: '按下', color: this.btnWarningPressBgcolor },
          ]
        },
        {
          title:'错误色',
          arr:[
            { btnState: '默认', color: this.btnErrorBg },
            { btnState: '滑过', color: this.btnErrorHoverBgcolor },
            { btnState: '按下', color: this.btnErrorPressBgcolor },
          ]
        },
      ]
    }
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
.btn-list {
  display: flex;
  justify-content: space-around;
  margin: 16px auto;
}
</style>
