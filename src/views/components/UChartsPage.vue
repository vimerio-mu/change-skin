<template>
  <div class="layout-content-main">
	<componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
    <titledContainer title="颜色属性">
      <p style="font-size:20px;">
        UF30中没有对应组件！
      </p>
      <div v-for="ucharts of uChartsKeywords" :key="ucharts.chartsName">
        <previewColorCard v-for="setting of ucharts.settings" :previewColor="vm.$store.state.uCharts[setting.defaultColor]" :previewTitle="setting.defaultColor" />
      </div>
    </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
      <div v-for="ucharts of uChartsKeywords">
        <titledContainer :title="ucharts.chartsNameCN">
          <settingLine v-for="setting of ucharts.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.uCharts[setting.defaultColor]"
            :changeMethod="setting.changeMethod" />
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
import previewColorCard from '../../components/PreviewColorCard.vue'
import uChartsKeywords from '../../keywords/uCharts.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      uChartsKeywords
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