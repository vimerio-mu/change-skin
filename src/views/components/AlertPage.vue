<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-alert type="info">消息提示文案</h-alert>
          <h-alert type="success">成功提示文案</h-alert>
          <h-alert type="warning">警告提示文案</h-alert>
          <h-alert type="error">错误提示文案</h-alert>
        </div>
      </titledContainer>
      <titledContainer title="含描述信息">
        <div>
          <h-alert>
            消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
          </h-alert>
          <h-alert type="success">
            成功提示文案
            <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
          </h-alert>
          <h-alert type="warning">
            警告提示文案
            <template slot="desc">警告的提示描述文案警告的提示描述文案警告的提示描述文案
            </template>
          </h-alert>
          <h-alert type="error">
            错误提示文案
            <span slot="desc"> 自定义错误描述文案。<h-icon name="help-circled" size="14"></h-icon></span>
          </h-alert>
        </div>
      </titledContainer>
      <titledContainer title="图标">
        <div>
          <h-alert show-icon>消息提示文案</h-alert>
          <h-alert type="success" show-icon>成功提示文案</h-alert>
          <h-alert type="warning" show-icon>警告提示文案</h-alert>
          <h-alert type="error" show-icon>错误提示文案</h-alert>
        </div>
      </titledContainer>
      <titledContainer title="可关闭">
        <div>
          <h-alert closable>消息提示文案</h-alert>
          <h-alert type="success" show-icon closable>
            成功提示文案
            <span slot="desc"
              >成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span
            >
          </h-alert>
          <h-alert type="warning" closable>
            自定义关闭内容
            <span slot="close">不再提示</span>
          </h-alert>
        </div>
      </titledContainer>
      <titledContainer title="顶部公告">
        <div>
          <h-alert banner type="warning">通知：通知内容。。。</h-alert>
          <h-alert banner closable type="warning">通知：通知内容。。。</h-alert>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of alertKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.alert[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    <titledContainer title="成功色">
        <settingLine 
        v-for="setting of alertKeywords.success.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.alert[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    <titledContainer title="信息色">
        <settingLine 
        v-for="setting of alertKeywords.info.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.alert[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    <titledContainer title="警告色">
        <settingLine 
        v-for="setting of alertKeywords.warnning.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.alert[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    <titledContainer title="错误色">
        <settingLine 
        v-for="setting of alertKeywords.error.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.alert[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import alertKeywords from '../../keywords/alert.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      alertKeywords
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