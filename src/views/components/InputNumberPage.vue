<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <u-input-number :max="10" :min="1" v-model="value" style="width: 100px"></u-input-number>
          <h-input-number :max="10" :min="1" v-model="value1"></h-input-number>
        </div>
      </titledContainer>
      <titledContainer title="状态">
        <div>
          <div>
          禁用：<u-input-number disabled style="width: 100px"></u-input-number>
                <h-input-number disabled style="width: 100px"></h-input-number>
          </div>
          <div>
          只读：<u-input-number readonly style="width: 100px"></u-input-number>
          <h-input-number readonly style="width: 100px"></h-input-number>
          </div>
        </div>
      </titledContainer>
      <titledContainer title="尺寸">
        <div>
          <h-input-number size="small" style="width: 100px"></h-input-number>
          <u-input-number size="small" style="width: 100px"></u-input-number>
          <h-input-number style="width: 100px"></h-input-number>
          <u-input-number style="width: 100px"></u-input-number>
          <h-input-number size="large" style="width: 100px"></h-input-number>
          <u-input-number size="large" style="width: 100px"></u-input-number>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of inputnumberKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.inputnumber[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
// TODO: uf3的组件（u开头的）需要引入
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import inputnumberKeywords from '../../keywords/inputnumber.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      inputnumberKeywords,
      value: 1,
      value1: 1
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