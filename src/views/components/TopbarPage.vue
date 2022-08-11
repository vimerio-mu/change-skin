<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="颜色属性">
        <p style="fontSize:20px">
          UF30中对应topbar组件待定，暂时引入HUI的顶部导航组件
        </p>
        <h-menu mode="horizontal" :active-name="activeName">
          <h-menu-item name="1">
            <h-icon name="ios-paper"></h-icon>
            内容管理
          </h-menu-item>
          <h-menu-item name="2">
            <h-icon name="ios-people"></h-icon>
            用户管理
          </h-menu-item>
          <Submenu name="3">
            <template slot="title">
              <h-icon name="stats-bars"></h-icon>
              统计分析
            </template>
            <h-menu-group title="使用">
              <h-menu-item name="3-1">新增和启动</h-menu-item>
              <h-menu-item name="3-2">活跃分析</h-menu-item>
              <h-menu-item name="3-3">时段分析</h-menu-item>
            </h-menu-group>
            <h-menu-group title="留存">
              <h-menu-item name="3-4">用户留存</h-menu-item>
              <h-menu-item name="3-5">流失用户</h-menu-item>
            </h-menu-group>
          </Submenu>
          <h-menu-item name="4">
            <h-icon name="settings"></h-icon>
            综合设置
          </h-menu-item>
        </h-menu>
        <br />
        <p>切换activeName</p>
        <Input v-model="activeName"></Input>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="IconHover">
        <settingLine v-for="setting of topbarKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.topbar[setting.defaultColor]"
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
import topbarKeywords from '../../keywords/topbar.js'
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      topbarKeywords,
      activeName: '1',
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