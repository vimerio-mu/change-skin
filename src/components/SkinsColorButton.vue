<template>
  <h-button class="skins-btn">
    <p class="actions">默认</p>
    <p class="color">#037DF3</p>
  </h-button>
</template>

<script>
export default {
    name:'SkinsColorButton',
    data() {
      return {
        actionColor:['Default','Hover','Pressed']
      }
    },
}
</script>

<style scoped>
  .skins-btn{
    width: 150px;
    height: 60px;
    background-color: #037DF3;
    /* position: relative; */
  }
  /* p{
    position: absolute;
    margin: auto;
  } */
  .actions{
    height: 16px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 16px;
    font-weight: 500;
  }
  .color{
    height: 12px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 12px;
    font-weight: 400;
  }
</style>