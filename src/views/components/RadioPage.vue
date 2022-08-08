<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="单独使用">
        <div>
          <h-radio>Radio</h-radio>
        </div>
      </titledContainer>
      <titledContainer title="组合使用">
        <div>
          <h-radio-group v-model="demo.simp1">
                  <h-radio label="apple">
                    <h-icon name="mail"></h-icon>
                    <span>Apple</span>
                  </h-radio>
                  <h-radio label="android">
                    <h-icon name="mail"></h-icon>
                    <span>Android</span>
                  </h-radio>
                  <h-radio label="windows">
                    <h-icon name="mail"></h-icon>
                    <span>Windows</span>
                  </h-radio>
                </h-radio-group>
        </div>
      </titledContainer>
      <titledContainer title="不可用">
        <div>
          <h-radio v-model="disabledSingle" disabled>Radio</h-radio>
                <h-radio-group v-model="disabledGroup">
                  <h-radio label="金斑蝶" disabled></h-radio>
                  <h-radio label="爪哇犀牛"></h-radio>
                  <h-radio label="印度黑羚"></h-radio>
                </h-radio-group>
        </div>
      </titledContainer>
      <titledContainer title="垂直">
        <div>
          <h-radio-group v-model="vertical" vertical>
                  <h-radio label="apple">
                    <h-icon name="mail"></h-icon>
                    <span>Apple</span>
                  </h-radio>
                  <h-radio label="android">
                    <h-icon name="mail"></h-icon>
                    <span>Android</span>
                  </h-radio>
                  <h-radio label="windows">
                    <h-icon name="mail"></h-icon>
                    <span>Windows</span>
                  </h-radio>
                </h-radio-group>
        </div>
      </titledContainer>
      <titledContainer title="按钮样式">
        <div>
          <h-radio-group v-model="button1" type="button">
            <h-radio label="北京"></h-radio>
            <h-radio label="上海"></h-radio>
            <h-radio label="深圳"></h-radio>
            <h-radio label="杭州"></h-radio>
          </h-radio-group>
        </div>
        <div>
          <h-radio-group v-model="button3" type="button">
            <h-radio label="北京" disabled></h-radio>
            <h-radio label="上海" disabled></h-radio>
            <h-radio label="深圳" disabled></h-radio>
            <h-radio label="杭州" disabled></h-radio>
          </h-radio-group>
        </div>
        <div>
          <h-radio-group v-model="button2" type="button">
            <h-radio label="北京"></h-radio>
            <h-radio label="上海" disabled></h-radio>
            <h-radio label="深圳"></h-radio>
            <h-radio label="杭州"></h-radio>
          </h-radio-group>
        </div>
      </titledContainer>
      <titledContainer title="尺寸">
        <div>
          <h-radio-group v-model="button4" type="button" size="large">
            <h-radio label="北京"></h-radio>
            <h-radio label="上海"></h-radio>
            <h-radio label="深圳"></h-radio>
            <h-radio label="杭州"></h-radio>
          </h-radio-group>
        </div>
        <div>
          <h-radio-group v-model="button5" type="button">
            <h-radio label="北京"></h-radio>
            <h-radio label="上海"></h-radio>
            <h-radio label="深圳"></h-radio>
            <h-radio label="杭州"></h-radio>
          </h-radio-group>
        </div>
        <div>
          <h-radio-group v-model="button6" type="button" size="small">
            <h-radio label="北京"></h-radio>
            <h-radio label="上海"></h-radio>
            <h-radio label="深圳"></h-radio>
            <h-radio label="杭州"></h-radio>
          </h-radio-group>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of backtopKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.backtop[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import backtopKeywords from '../../keywords/backtop.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      backtopKeywords,
      demo: {
          simp1: 'android'
        },
        disabledSingle: true,
        disabledGroup: '爪哇犀牛',
        vertical: 'apple',
        button1: '北京',
        button2: '北京',
        button3: '北京',
        button4: '北京',
        button5: '北京',
        button6: '北京'
    }
  }
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