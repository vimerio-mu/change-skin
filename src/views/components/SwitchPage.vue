<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <h-switch v-model="checked" :style="checked?'':styleObj"></h-switch>
      </titledContainer><br>
      <titledContainer title="尺寸">
        <h-switch size="large"/><br><br>
        <h-switch/><br><br>
        <h-switch size="small"/>
      </titledContainer><br>
      <titledContainer title="文字和图标">
        <h-switch>
          <span slot="open">开</span>
          <span slot="close">关</span>
        </h-switch>
        <br /><br />
        <h-switch>
          <h-icon name="right" slot="open"></h-icon>
          <h-icon name="close" slot="close"></h-icon>
        </h-switch>
        <br /><br />
        <h-switch size="large">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </h-switch>
        <br /><br />
        <h-switch size="large">
          <span slot="open">ON</span>
          <span slot="close">OFF</span>
        </h-switch>
      </titledContainer><br>
      <titledContainer title="类型">
        <h-switch width="78" type="info">
          <span slot="open">info</span>
          <span slot="close">info</span>
        </h-switch><br /><br />
        <h-switch width="78" type="success">
          <span slot="open">success</span>
          <span slot="close">success</span>
        </h-switch><br /><br />
        <h-switch width="78" type="warning">
          <span slot="open">warning</span>
          <span slot="close">warning</span>
        </h-switch><br /><br />
        <h-switch width="78" type="error">
          <span slot="open">error</span>
          <span slot="close">error</span>
        </h-switch>
      </titledContainer><br>
      <titledContainer title="不可用">
        <h-switch disabled/>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
        <titledContainer title="开关">
            <settingLine 
            v-for="setting of switchKeywords.settings" :key="setting.settingName"
            :settingName="setting.settingName"
            :defaultColor="vm.$store.state.switch[setting.defaultColor]"
            :changeMethod="setting.changeMethod"/>
        </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import switchPreview from '../../components/SwitchPreview.vue'
import switchKeywords from '../../keywords/switch.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine,switchPreview},
  data() {
    return {
      vm: this,
      switchKeywords,
      checked:false
    }
  },
  computed: {
    styleObj(){
      return{
        backgroundColor:this.$store.state.switch.switchBackgroundColor,
        borderColor:this.$store.state.switch.switchBorderColor
      }
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