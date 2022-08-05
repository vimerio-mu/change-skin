<template>
  <div>
    <slot></slot>
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