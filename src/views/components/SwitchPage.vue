<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <h-switch v-model="switch1" :style="switch1?'':styleObj"></h-switch>
      </titledContainer><br>
      <titledContainer title="尺寸">
        <h-switch v-model="switch2" :style="switch2?'':styleObj" size="large"/><br><br>
        <h-switch v-model="switch3" :style="switch3?'':styleObj"/><br><br>
        <h-switch v-model="switch4" :style="switch4?'':styleObj" size="small"/>
      </titledContainer><br>
      <titledContainer title="文字和图标">
        <h-switch v-model="switch5" :style="switch5?'':styleObj">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </h-switch>
        <br /><br />
        <h-switch v-model="switch6" :style="switch6?'':styleObj">
          <h-icon name="right" slot="open"></h-icon>
          <h-icon name="close" slot="close"></h-icon>
        </h-switch>
        <br /><br />
        <h-switch size="large" v-model="switch7" :style="switch7?'':styleObj">
          <span slot="open">开启</span>
          <span slot="close">关闭</span>
        </h-switch>
        <br /><br />
        <h-switch size="large" v-model="switch8" :style="switch8?'':styleObj">
          <span slot="open">ON</span>
          <span slot="close">OFF</span>
        </h-switch>
      </titledContainer><br>
      <titledContainer title="类型">
        <h-switch width="78" type="info" v-model="switch9" :style="switch9?'':styleObj">
          <span slot="open">info</span>
          <span slot="close">info</span>
        </h-switch><br /><br />
        <h-switch width="78" type="success" v-model="switch10" :style="switch10?'':styleObj">
          <span slot="open">success</span>
          <span slot="close">success</span>
        </h-switch><br /><br />
        <h-switch width="78" type="warning" v-model="switch11" :style="switch11?'':styleObj">
          <span slot="open">warning</span>
          <span slot="close">warning</span>
        </h-switch><br /><br />
        <h-switch width="78" type="error" v-model="switch12" :style="switch12?'':styleObj">
          <span slot="open">error</span>
          <span slot="close">error</span>
        </h-switch>
      </titledContainer><br>
      <titledContainer title="不可用">
        <h-switch disabled :style="disabledStyleObj"/>
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
import switchKeywords from '../../keywords/switch.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine,},
  data() {
    return {
      vm: this,
      switchKeywords,
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      switch5: false,
      switch6: false,
      switch7: false,
      switch8: false,
      switch9: false,
      switch10: false,
      switch11: false,
      switch12: false,
    }
  },
  computed: {
    styleObj(){
      return{
        backgroundColor:this.$store.state.switch.switchBackgroundColor,
        borderColor:this.$store.state.switch.switchBorderColor
      }
    },
    disabledStyleObj(){
      return {
        backgroundColor:this.$store.state.switch.switchDisabledBackgroundColor,
        borderColor:this.$store.state.switch.switchDisabledBorderColor
      }
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