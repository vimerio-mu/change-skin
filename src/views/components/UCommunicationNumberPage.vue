<template>
  <div class="layout-content-main">
    <!-- 预览 -->
	  <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="颜色属性">
        <u-communication-number 
          v-model="editPhone"
          @on-value-change="onValueChange"
          @on-value-input="onValueInput">
        </u-communication-number>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
        <titledContainer title="联系方式输入框">
          <settingLine v-for="setting of uCommunicationNumberKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.uCommunicationNumber[setting.defaultColor]"
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
import uCommunicationNumberKeywords from '../../keywords/uCommunicationNumber.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      uCommunicationNumberKeywords,
      editPhone:'',
    }
  },
  methods: {
    onValueChange(){
      
    },
    onValueInput(){

    },
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