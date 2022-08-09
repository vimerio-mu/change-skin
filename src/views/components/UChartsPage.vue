<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <!-- 信息色 -->
      <div class="colorPreview">
        <p>信息色</p>
        <div class="color-div" :style="{backgroundColor:$store.state.uCharts.uChartsStatusInfo}"></div>
      </div>
      <!-- 成功色 -->
      <div class="colorPreview">
        <p>成功色</p>
        <div class="color-div" :style="{backgroundColor:$store.state.uCharts.uChartsStatusSuccess}"></div>
      </div>
      <!-- 错误色 -->
      <div class="colorPreview">
        <p>错误色</p>
        <div class="color-div" :style="{backgroundColor:$store.state.uCharts.uChartsStatusError}"></div>
      </div>
      <!-- 警告色 -->
      <div class="colorPreview">
        <p>警告色</p>
        <div class="color-div" :style="{backgroundColor:$store.state.uCharts.uChartsStatusWarning}"></div>
      </div>

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
import uChartsKeywords from '../../keywords/uCharts.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
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
.colorPreview {
  display: flex;
  justify-content: center;
  height: 60px;
  line-height: 60px;
  margin:20px auto;
  text-align: center;
  color:black;
  font-weight: 500;
  font-size: 16px;
  font-family: PingFangSC-Medium;
}
.color-div{
  height: 60px;
  width: 60%;
  border-radius: 3px;
  margin-left: 20px;
}
</style>