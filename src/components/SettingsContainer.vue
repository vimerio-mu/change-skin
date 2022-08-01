<template>
  <div>
    <SettingsTitle :title="title"/>
    <SettingsList/>
  </div>
</template>

<script>
import SettingsTitle from './SettingsTitle.vue'
import SettingsList from './SettingsList.vue'
export default {
  name: 'SettingsContainer',
  components: {
    SettingsTitle,
    SettingsList,
  },
  props: ['title'],
  
}
</script>
