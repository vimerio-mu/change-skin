<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="品牌色">
        <div>
          <h-alert type="info">消息提示文案</h-alert>
          <h-alert type="success">成功提示文案</h-alert>
          <h-alert type="warning">警告提示文案</h-alert>
          <h-alert type="error">错误提示文案</h-alert>
        </div>
      </titledContainer>
      <titledContainer title="功能色">
        <skinsColorCard/>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="品牌色">
        <settingLine 
        v-for="setting of skinColorKeywords.primary.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.Base[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
      </titledContainer>
      <titledContainer title="成功色">
          <settingLine 
          v-for="setting of skinColorKeywords.success.settings" :key="setting.settingName"
          :settingName="setting.settingName" :defaultColor="vm.$store.state.Base[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
      </titledContainer>
      <titledContainer title="信息色">
          <settingLine 
          v-for="setting of skinColorKeywords.info.settings" :key="setting.settingName"
          :settingName="setting.settingName" :defaultColor="vm.$store.state.Base[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
      </titledContainer>
      <titledContainer title="警告色">
          <settingLine 
          v-for="setting of skinColorKeywords.warning.settings" :key="setting.settingName"
          :settingName="setting.settingName" :defaultColor="vm.$store.state.Base[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
      </titledContainer>
      <titledContainer title="错误色">
          <settingLine 
          v-for="setting of skinColorKeywords.error.settings" :key="setting.settingName"
          :settingName="setting.settingName" :defaultColor="vm.$store.state.Base[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
      </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../components/ComponentPreview.vue'
import componentSettings from '../components/ComponentSettings.vue'
import titledContainer from '../components/TitledContainer.vue'
import settingLine from '../components/SettingLine.vue'
import skinsColorCard from '../components/SkinsColorCard.vue'
import skinColorKeywords from '../keywords/skinColor.js'
export default {
  components: {componentPreview,componentSettings,titledContainer,settingLine,skinsColorCard},
  data() {
    return {
      vm: this,
      skinColorKeywords
    }
  },
}
</script>

<style scoped>
.layout-content-main {
  background: #ffffff;
  margin: 8px;
  flex: 1;
  display: flex;
  padding-bottom: 20px;
}
</style>
