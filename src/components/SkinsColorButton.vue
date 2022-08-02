<template>
  <h-button class="skins-btn" :style="styleObj">
    <p class="actions">{{btnState}}</p>
    <p class="color">{{color}}</p>
  </h-button>
</template>

<script>
export default {
    name:'SkinsColorButton',
    props: ['btnState','color'],
    computed: {
      styleObj(){
        return {
          backgroundColor:this.color,
          borderColor:this.color
        }
      },
    }
}
</script>

<style scoped>
  .skins-btn{
    width: 150px;
    height: 60px;
    background-color: #037DF3;
    text-align: left;
  }
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
    margin-top: 8px;
  }
</style>