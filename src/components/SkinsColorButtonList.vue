<template>
  <div class="btn-list">
    <SkinsColorButton/>
    <SkinsColorButton/>
    <SkinsColorButton/>
  </div>
</template>

<script>
import SkinsColorButton from '../components/SkinsColorButton.vue'
export default {
    name:'SkinsColorButtonList',
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