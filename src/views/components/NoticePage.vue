<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-button type="primary" @click="open(false)">打开提醒</h-button>
        </div>
      </titledContainer>
      <titledContainer title="提醒类型">
        <div>
          <h-button @click="info(false)" type="primary">消息</h-button>
          <h-button @click="success(false)" type="success">成功</h-button>
          <h-button @click="warning(false)" type="warning">警告</h-button>
          <h-button @click="error(false)" type="error">错误</h-button>
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
      backtopKeywords
    }
  },
  methods: {
    open(nodesc) {
      this.$hNotice.open({
        title: "这是通知标题",
        desc: nodesc
          ? ""
          : "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
      });
    },
    info(nodesc) {
      this.$hNotice.info({
        title: "这是通知标题",
        desc: nodesc
          ? ""
          : "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
      });
    },
    success(nodesc) {
      this.$hNotice.success({
        title: "这是通知标题",
        desc: nodesc
          ? ""
          : "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
      });
    },
    warning(nodesc) {
      this.$hNotice.warning({
        title: "这是通知标题",
        desc: nodesc
          ? ""
          : "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
      });
    },
    error(nodesc) {
      this.$hNotice.error({
        title: "这是通知标题",
        desc: nodesc
          ? ""
          : "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述",
      });
    },
    destroy() {
      this.$hNotice.destroy();
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