<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="品牌色">
        <ul class="list-card">
          <skinsColorCard v-for="setting of skinColorKeywords.primary.settings" :key="setting.settingName"
            :settingName="setting.settingName" :defaultColor="$store.state.Base[setting.defaultColor]"/>
        </ul>
      </titledContainer>
      <titledContainer title="功能色">
        <ul>
          <li v-for="skinColor of skinColorKeywords">
            <ul class="list-card" v-if="skinColor.colorName!='primary'">
              <skinsColorCard v-for="setting of skinColor.settings" :key="setting.settingName"
                :settingName="setting.settingName" :defaultColor="$store.state.Base[setting.defaultColor]"/>
            </ul>
          </li>
        </ul>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="品牌色">
        <settingLine 
        v-for="setting of skinColorKeywords.primary.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.Base[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
      </titledContainer>
      <titledContainer title="品牌色">
        <div v-for="skinColor of skinColorKeywords">
          <settingsTitle :title="skinColor.colorNameCN" v-if="skinColor.colorName!='primary'" />
          <settingLine 
            v-for="setting of skinColor.settings" :key="setting.settingName"
            v-if="skinColor.colorName!='primary'"
            :settingName="setting.settingName" 
            :defaultColor="vm.$store.state.Base[setting.defaultColor]" 
            :changeMethod="setting.changeMethod"/>
        </div>
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
import settingsTitle from '../components/SettingsTitle.vue'
import skinColorKeywords from '../keywords/skinColor.js'
export default {
  components: {componentPreview,componentSettings,titledContainer,settingLine,skinsColorCard,settingsTitle},
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
.list-card{
  display: flex;
  justify-content: space-around;
  margin: 16px auto;
}
</style>
