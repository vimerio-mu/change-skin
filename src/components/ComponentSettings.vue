<template>
  <div>
    <titledContainer title="组件设置">
      <settingLine @input="update" settingName="警告色" defaultColor="#037DF3" />
      <!-- <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div> -->
    </titledContainer>
    <titledContainer title="组件设置">
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
    </titledContainer>
    <titledContainer title="组件设置">
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
      <div>settings</div>
    </titledContainer>
  </div>
</template>

<script>
import titledContainer from '../components/TitledContainer.vue'
import settingLine from '../components/SettingLine.vue'
export default {
  components: {titledContainer, settingLine},
  data() {
    return {
      btnDangerColor: '#F14C5D'
    }
  },
  methods: {
    update(data) {
      this.btnDangerColor = data
    }
  }
}
</script>

<style>
</style>