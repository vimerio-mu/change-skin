<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-poptip
            confirm
            title="您确认删除这条内容吗？"
            @on-ok="ok"
            @on-cancel="cancel"
          >
            <h-button>删除</h-button>
          </h-poptip>
          <h-poptip
            confirm
            title="Are you sure delete this task?"
            @on-ok="ok"
            @on-cancel="cancel"
            ok-text="yes"
            cancel-text="no"
          >
            <h-button>国际化</h-button>
          </h-poptip>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of poptipKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.poptip[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import poptipKeywords from '../../keywords/poptip.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      poptipKeywords
    }
  },
  methods: {
    ok() {
      this.$hMessage.info("点击了确定");
    },
    cancel() {
      this.$hMessage.info("点击了取消");
    },
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