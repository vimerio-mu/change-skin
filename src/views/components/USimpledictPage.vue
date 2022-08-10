<template>
  <div class="layout-content-main">
    <!-- 预览 -->
	<componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
    <titledContainer title="颜色属性">
        <!-- <previewColorCard v-for="setting of uSimpledictKeywords.settings" :previewColor="vm.$store.state.compareIcon[setting.defaultColor]" :previewTitle="setting.defaultColor" /> -->
    </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
        <titledContainer title="simpledict">
          <settingLine v-for="setting of uSimpledictKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.uSimpledict[setting.defaultColor]"
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
import uSimpledictKeywords from '../../keywords/uSimpledict.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      uSimpledictKeywords}
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