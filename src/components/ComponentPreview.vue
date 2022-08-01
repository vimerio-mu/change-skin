<template>
  <div>
    <div class="nameContainer">
        <div class="nameTitle">{{ skinName }}</div>
    </div>
    <titledContainer title="品牌色">
      <SkinsColorButtonList/>
    </titledContainer>
    <titledContainer title="功能色">
      <SkinsColorButtonList/>
      <SkinsColorButtonList/>
      <SkinsColorButtonList/>
      <SkinsColorButtonList/>
    </titledContainer>
  </div>
</template>

<script>
import titledContainer from '../components/TitledContainer.vue'
import SkinsColorButtonList from '../components/SkinsColorButtonList.vue'
export default {
  components: {titledContainer,SkinsColorButtonList},
  props: {
    skinName:String
  }
}
</script>

<style>
.nameContainer {
  background: #f7f7f7;
  width: 100%;
  height: 36px;
  margin: 8px;
}
.nameTitle {
  padding: 8px;
  font-size: 14px;
  color: #333333;
  text-align: left;
  font-weight: 600;
}
</style>