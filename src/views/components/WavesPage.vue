<template>
  <div class="layout-content-main">
    <!-- 预览 -->
	<componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
    <titledContainer title="颜色属性">
        <!-- <p style="font-size:20px;">
            UF30中没有对应组件！
        </p> -->
        <previewColorCard v-for="setting of wavesKeywords.settings" 
            :previewColor="vm.$store.state.waves[setting.defaultColor]" 
            :previewTitle="setting.defaultColor" />
    </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
        <titledContainer title="waves">
          <settingLine v-for="setting of wavesKeywords.settings" :key="setting.settingName" 
            :settingName="setting.settingName" 
            :defaultColor="vm.$store.state.waves[setting.defaultColor]"
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
import wavesKeywords from '../../keywords/waves.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      wavesKeywords
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