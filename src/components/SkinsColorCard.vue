<template>
  <h-card dis-hover class="color-card" :style="styleObj">
    <p class="state">{{settingNameEN}}</p>
    <p class="color">{{defaultColor}}</p>
  </h-card>
</template>

<script>
export default {
    props: ['settingName','defaultColor'],
    computed: {
      styleObj(){
        return {
          backgroundColor:this.defaultColor,
          borderColor:this.defaultColor
        }
      },
      settingNameEN(){
        switch (this.settingName) {
          case '默认':
            return 'Default';
          case '滑过':
            return 'Hover';
          case '按下':
            return 'Pressed';
        }
      }
    },
}
</script>

<style scoped>
  .color-card{
    width: 150px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
  }
  .state{
    height: 16px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: -5px;

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