<template>
  <div class="layout-content-main">
      <titledContainer title="颜色属性">
    <p style="font-size:24px;">
      UF30中没有对应组件！  
    </p>
        <div v-for="ucharts of uChartsKeywords" :key="ucharts.chartsName">
          <previewColorCard v-for="setting of ucharts.settings" :previewColor="vm.$store.state.uCharts[setting.defaultColor]" :previewTitle="setting.defaultColor"/>
        </div>
      </titledContainer>
      
      <!-- 信息色 -->
      <!-- <h-circle style="marginRight:12px;" :percent="80" :stroke-color="$store.state.uCharts.uChartsStatusInfo">
        <span class="demo-circle-inner" style="font-size: 24px;">80%</span>
      </h-circle> -->
      <!-- 成功色 -->
      <!-- <h-circle style="marginRight:12px;" :percent="100" :stroke-color="$store.state.uCharts.uChartsStatusSuccess">
        <h-icon name="right" size="60" :style="`color: ${$store.state.uCharts.uChartsStatusSuccess};`"></h-icon>
      </h-circle> -->
      <!-- 错误色 -->
      <!-- <h-circle style="marginRight:12px;" :percent="35" :stroke-color="$store.state.uCharts.uChartsStatusError">
        <span class="demo-circle-inner">
          <h-icon name="close" size="50" :style="`color: ${$store.state.uCharts.uChartsStatusError};`"></h-icon>
        </span>
      </h-circle> -->
      <!-- 警告色 -->
      <!-- <h-circle style="marginRight:12px;" :percent="55" :stroke-color="$store.state.uCharts.uChartsStatusWarning">
        <span class="demo-circle-inner">
          <h-icon name="alert" size="50" :style="`color: ${$store.state.uCharts.uChartsStatusWarning};`"></h-icon>
        </span>
      </h-circle> -->
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
      <div v-for="ucharts of uChartsKeywords">
        <titledContainer :title="ucharts.chartsNameCN">
            <settingLine
            v-for="setting of ucharts.settings" :key="setting.settingName"
            :settingName="setting.settingName"
            :defaultColor="vm.$store.state.uCharts[setting.defaultColor]"
            :changeMethod="setting.changeMethod"/>
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
  components: {componentPreview, componentSettings,titledContainer,settingLine,previewColorCard},
  data() {
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