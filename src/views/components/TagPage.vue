<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基本用法">
        <h-tag style="border:red;">标签一</h-tag>
        <h-tag closable>标签二</h-tag>
      </titledContainer>
      <titledContainer title="样式类型">
        <h-tag type="border">标签一</h-tag>
        <h-tag type="border" closable>标签二</h-tag>
        <h-tag type="dot">标签三</h-tag>
        <h-tag type="dot" closable>标签四</h-tag>
      </titledContainer>
      <titledContainer title="不同颜色">
        <div class="tag-group">
          <h-tag closable color="blue">标签一</h-tag>
          <h-tag closable color="green">标签二</h-tag>
          <h-tag closable color="red">标签三</h-tag>
          <h-tag closable color="yellow">标签四</h-tag>
        </div>
        <div class="tag-group">
          <h-tag type="border" closable color="blue">标签一</h-tag>
          <h-tag type="border" closable color="green">标签二</h-tag>
          <h-tag type="border" closable color="red">标签三</h-tag>
          <h-tag type="border" closable color="yellow">标签四</h-tag>
        </div>
        <div class="tag-group">
          <h-tag type="dot" closable color="blue">标签一</h-tag>
          <h-tag type="dot" closable color="green">标签二</h-tag>
          <h-tag type="dot" closable color="red">标签三</h-tag>
          <h-tag type="dot" closable color="yellow">标签四</h-tag>
        </div>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="标签">
        <settingLine v-for="setting of tagKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.tag[setting.defaultColor]"
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
import tagKeywords from '../../keywords/tag.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      tagKeywords
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