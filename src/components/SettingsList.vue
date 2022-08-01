<template>
    <ul class="settings-list">
        <SettingsItem v-for="(state,index) in btnStates" :key="index" :btnState="state"/>
    </ul>
</template>

<script>
import SettingsItem from './SettingsItem.vue'
export default {
    name:'SettingsList',
    components: {
        SettingsItem,
    },
    data() {
        return {
            btnStates:['默认','滑过','按下']
        }
    },
}
</script>
<style scoped>
    .settings-list{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 5px;
    }
</style>