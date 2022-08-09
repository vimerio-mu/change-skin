<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <div v-for="button of buttonKeywords">
        <titledContainer :title="button.buttonNameCN">
          <previewButton v-for="btn of button.settings"
           :btnStatus="btn[0].settingName.substring(0,2)"
           :bgColor="vm.$store.state[button.buttonName][btn[0].defaultColor]"
           :textColor="vm.$store.state[button.buttonName][btn[1].defaultColor]"
           :borderColor="vm.$store.state[button.buttonName][btn[2].defaultColor]" />
        </titledContainer>
      </div>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
      <div v-for="button of buttonKeywords">
        <titledContainer :title="button.buttonNameCN">
          <div v-for="settings of button.settings">
            <settingLine 
            v-for="setting of settings" :key="setting.settingName"
            :settingName="setting.settingName"
            :defaultColor="vm.$store.state[button.buttonName][setting.defaultColor]"
            :changeMethod="setting.changeMethod"/>
          </div>
        </titledContainer>
      </div>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import previewButton from '../../components/PreviewButton.vue'
import buttonKeywords from '../../keywords/button.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine,previewButton},
  data() {
    return {
      vm: this,
      buttonKeywords
    }
  },
}
</script>

<style>
.layout-content-main {
  background: #ffffff;
  margin: 8px;
  flex: 1;
  display: flex;
}
</style>