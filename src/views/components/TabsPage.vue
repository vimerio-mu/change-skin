<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <h-tabs value="name1">
            <h-tab-pane label="标签一" name="name1">标签一的内容</h-tab-pane>
            <h-tab-pane label="标签二" name="name2">标签二的内容</h-tab-pane>
            <h-tab-pane label="标签三" name="name3">标签三的内容</h-tab-pane>
        </h-tabs>
        <h-tabs value="name2">
            <h-tab-pane label="标签一" name="name1">标签一的内容</h-tab-pane>
            <h-tab-pane label="标签二" name="name2">标签二的内容</h-tab-pane>
            <h-tab-pane label="标签三" name="name3">标签三的内容</h-tab-pane>
        </h-tabs>
        <h-tabs value="name3">
            <h-tab-pane label="标签一" name="name1">标签一的内容</h-tab-pane>
            <h-tab-pane label="标签二" name="name2">标签二的内容</h-tab-pane>
            <h-tab-pane label="标签三" name="name3">标签三的内容</h-tab-pane>
        </h-tabs>
      </titledContainer>
      <titledContainer title="带icon样式">
        <h-tabs>
            <h-tab-pane label="macOS" icon="social-apple">标签一的内容</h-tab-pane>
            <h-tab-pane label="Windows" icon="social-windows">标签二的内容</h-tab-pane>
            <h-tab-pane label="android" icon="social-android">标签三的内容</h-tab-pane>
        </h-tabs>
      </titledContainer>
      <titledContainer title="卡片样式">
        <h-tabs type="card">
            <h-tab-pane label="标签一">标签一的内容</h-tab-pane>
            <h-tab-pane label="标签二">标签二的内容</h-tab-pane>
            <h-tab-pane label="标签三">标签三的内容</h-tab-pane>
        </h-tabs>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="标签页">
        <settingLine v-for="setting of tabsKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.tabs[setting.defaultColor]"
          :changeMethod="setting.changeMethod" />
      </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import previewColorCard from '../../components/PreviewColorCard.vue'
import tabsKeywords from '../../keywords/tabs.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      tabsKeywords
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
.tag-group {
  margin-top: 10px;
}
</style>