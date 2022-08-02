<template>
  <ul class="btn-list">
    <SkinsColorButton  v-for="state in btnStates" :btnState="state"/>
  </ul>
</template>

<script>
import SkinsColorButton from '../components/SkinsColorButton'
export default {
    name:'SkinsColorButtonList',
    props: ['btnStates'],
    components: {
        SkinsColorButton,
    }
}
</script>

<style scoped>
    .btn-list{
        display: flex;
        justify-content: space-around;
        margin: 16px auto;
    }
</style>