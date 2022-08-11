<template>
  <div class="layout-content-main">
    <!-- 预览 -->
	<componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
    <titledContainer title="颜色属性">
        <p style="fontSize:20px">
          UF30中对应组件待引入
        </p><br>
        <u-dict
          :dictName="dictName"
          :multiple="multiple"
          :showOptionAll="showOptionAll" :showLabel="showLabel"
          :filterRule="filterRuleEnable?filterRule:null"
          :dictList="dictListEnable?dictList:[]"
          :placeholder="placeholder === '' ? $t('m.i.common.select_option'): placeholder"
          v-model="value"
          @onItemLoad="onItemLoad"
        >
      </u-dict>
    </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
        <titledContainer title="simpledict">
          <settingLine v-for="setting of uSimpledictKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.uSimpledict[setting.defaultColor]"
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
import uSimpledictKeywords from '../../keywords/uSimpledict.js'
let bigData = [];
for (let i = 0; i < 2000; i++) {
  let obj = {};
  obj.value = "value" + i;
  obj.label = "label" + i;
  bigData.push(obj);
}
export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      uSimpledictKeywords,
      bigData: bigData,
      value:"value0",
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