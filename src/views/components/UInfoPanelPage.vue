<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <!-- <titledContainer title="底下有线的,右侧有slot"> -->
        <u-info-pannel :collapsable="false" :hasDashline="false" title="底下有线的,右侧有slot">
          <h-icon slot="right" name="mail" size="20"></h-icon>
          <div slot="content">
            我是内容
          </div>
        </u-info-pannel>
      <!-- </titledContainer> -->
      <!-- <titledContainer title="默认关闭,小标记默认关闭,小标记">
        <u-info-pannel @statusChange="statusChange" :indicator="true" :collapse="true" title="默认关闭,小标记" :collapsable="true">
          <div slot="content">
            默认关闭的
          </div>
        </u-info-pannel>
      </titledContainer>
      <titledContainer title="我是可以折叠的">
        <u-info-pannel @statusChange="statusChange" title="我是可以折叠的" :collapsable="true">
          <div slot="content">
            我是被折叠的内容,状态变化看action面板
          </div>
        </u-info-pannel>
      </titledContainer>
      <titledContainer title="我折叠不了">
        <u-info-pannel :collapsable="false" @statusChange="statusChange" title="我折叠不了">
          <div slot="content">
            我是一直被展示
          </div>
        </u-info-pannel>
      </titledContainer>
      <titledContainer title="标题后面加东西">
        <u-info-pannel :collapsable="false" @statusChange="statusChange" title="标题后面加点">
          <div slot="title">
            标题后面
          </div>
          <div slot="content">
            我是内容
          </div>
        </u-info-pannel>
      </titledContainer>
      <titledContainer title="标题中有内容是异步获取的">
        <u-info-pannel :collapsable="false" :isAsyncTitle="isAsyncTitle" :title="asyncTitle">
          <div slot="content">
            我是内容
          </div>
        </u-info-pannel>
      </titledContainer> -->
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="面板">
        <settingLine 
        v-for="setting of uInfoPanelKeywords.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="$store.state.uInfoPanel[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import uInfoPanelKeywords from '../../keywords/uInfoPanel.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      uInfoPanelKeywords,
      isAsyncTitle: true, // 异步回调前为true，回调成功后赋值为false
      asyncTitle: ''
    }
  },
  method: {
    asyncTitleFun () {
      setTimeout(() => {
        // setTimeout方法此处为演示异步时间
        this.asyncTitle = '标题中有内容是异步获取的'
        this.isAsyncTitle = false // 此处必须设置为false，否则异步结果无法显示
      }, 1000)
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