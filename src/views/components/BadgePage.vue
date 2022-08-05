<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-badge count="333333">
            <a href="#" class="demo-badge"></a>
          </h-badge>
        </div>
      </titledContainer>
      <titledContainer title="小红点">
        <div class="h-badge-wrap">
          <h-badge dot class="demo-h-badge">
            <a href="#" class="demo-badge"></a>
          </h-badge>
          <h-badge dot class="demo-h-badge">
            <h-icon name="remind_fill" size="26"></h-icon>
          </h-badge>
          <h-badge dot class="demo-h-badge">
            <a href="#">可以是一个链接</a>
          </h-badge>
        </div>
      </titledContainer>
      <titledContainer title="封顶数字">
        <div class="h-badge-wrap">
          <h-badge count="100">
            <a href="#" class="demo-badge"></a>
          </h-badge>
          <h-badge count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
          </h-badge>
        </div>
      </titledContainer>
      <titledContainer title="独立使用">
        <div>
          <h-badge count="10"></h-badge>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of badgeKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.badge[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import badgeKeywords from '../../keywords/badge.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      badgeKeywords
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
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
.h-badge-wrap .h-badge {
  margin-right: 40px;
}
.h-badge-wrap .demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>