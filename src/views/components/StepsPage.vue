<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-steps :current="0">
                  <h-step title="已完成" content="这里是该步骤的描述信息"></h-step>
                  <h-step status="wait" title="已完成" content="这里是该步骤的描述信息"></h-step>
                  <h-step status="process" title="进行中" content="这里是该步骤的描述信息"></h-step>
                  <h-step status="finish" title="待进行" content="这里是该步骤的描述信息"></h-step>
                  <h-step status="error" title="待进行" content="这里是该步骤的描述信息"></h-step>
                </h-steps>
                <br>
                <br>
                <h-steps :current="0" status="wait">
                  <h-step title="已完成" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="进行中" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                </h-steps>
                <br>
                <br>
                <h-steps :current="1" status="process">
                  <h-step title="已完成" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="进行中" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                </h-steps>
                <br>
                <br>
                <h-steps :current="2" status="finish">
                  <h-step title="已完成" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="进行中" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                </h-steps>
                <br>
                <br>
                <h-steps :current="3" status="error">
                  <h-step title="已完成" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="进行中" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                  <h-step title="待进行" content="这里是该步骤的描述信息"></h-step>
                </h-steps>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of stepsKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.steps[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import stepsKeywords from '../../keywords/steps.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      stepsKeywords,
      date: new Date(),
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