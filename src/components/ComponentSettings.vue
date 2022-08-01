<template>
  <div>
    <titledContainer title="品牌色">
      <SettingsList/>
    </titledContainer>
    <titledContainer title="品牌色">
      <SettingsContainer v-for="(ct,index) in colorTitles" :key="index" :title="ct"/>
    </titledContainer>
  </div>
</template>

<script>
import titledContainer from '../components/TitledContainer.vue'
import SettingsList from '../components/SettingsList.vue'
import SettingsContainer from '../components/SettingsContainer.vue'
export default {
  components: {
    titledContainer,
    SettingsList,
    SettingsContainer,
  },
  data () {
      return {
          colorTitles:['信息色','成功色','警告色','错误色'],
      }
  }
}
</script>

<style>
</style>