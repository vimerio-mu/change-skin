<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-input v-model="value" placeholder="请输入..." style="width: 300px;"></h-input>
        </div>
      </titledContainer>
      <titledContainer title="输入框类型">
        <div class="h-badge-wrap">
          <h-input v-model="value1" placeholder="type不设置默认为text类型"></h-input>
          <h-input v-model="value2" placeholder="type设置为textarea" type="textarea"></h-input>
          <h-input v-model="value3" placeholder="type设置为password" type="password"></h-input>
          <h-input v-model="value4" placeholder="type设置为int" type="int"></h-input>
        </div>
      </titledContainer>
      <titledContainer title="尺寸">
        <h-input v-model="value1" size="large" placeholder="large size"></h-input>
        <h-input v-model="value2" placeholder="default size"></h-input>
        <h-input v-model="value3" size="small" placeholder="small size"></h-input>
      </titledContainer>
      <titledContainer title="禁用状态">
        <div>
          <h-input v-model="value9" disabled placeholder="请输入..."></h-input>
        </div>
      </titledContainer>
      <titledContainer title="带icon的输入框">
        <div>
          <h-input v-model="value4" icon="close" placeholder="请输入..." style="width: 300px;" @on-click="onclick">
          </h-input>
        </div>
      </titledContainer>
      <titledContainer title="复合型输入框">
        <div>
          <h-input v-model="value5" style="margin-bottom: 10px;">
            <h-select v-model="select1" size="small" slot="prepend" style="width: 80px; height: 24px;">
              <h-option value="http">http://</h-option>
              <h-option value="https">https://</h-option>
            </h-select>
            <h-select v-model="select2" size="small" slot="append" style="width: 70px; height: 24px;">
              <h-option value="com">.com</h-option>
              <h-option value="org">.org</h-option>
              <h-option value="io">.io</h-option>
            </h-select>
          </h-input>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of inputKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.input[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import inputKeywords from '../../keywords/input.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      inputKeywords,
      value:'',
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      select1: "http",
      select2: "com",
      select3: "day",
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