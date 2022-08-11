<template>
  <div class="layout-content-main">
    <!-- 预览 -->
	<componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
    <titledContainer title="颜色属性">
      <h-transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"
      ></h-transfer>
    </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
        <titledContainer title="穿梭框">
          <settingLine v-for="setting of transferKeywords.settings" :key="setting.settingName" 
            :settingName="setting.settingName" 
            :defaultColor="vm.$store.state.transfer[setting.defaultColor]"
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
import transferKeywords from '../../keywords/transfer.js'

export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      transferKeywords,
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys(),
    }
  },
  methods: {
    getMockData() {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: "内容" + i,
          description: "内容" + i + "的描述信息",
          disabled: Math.random() * 3 < 1,
        });
      }
      return mockData;
    },
    getTargetKeys() {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map((item) => item.key);
    },
    render1(item) {
      return item.label;
    },
    handleChange1(newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
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