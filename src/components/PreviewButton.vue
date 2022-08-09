<template>
  <div class="item">
    <p class="btn-state-text">{{btnStatus}}</p> 
    <div class="btn-placeholder"><h-button size="small" class="btn-basic btn-small" :style="styleObj">确定</h-button></div>
    <div class="btn-placeholder"><h-button class="btn-basic btn-middle" :style="styleObj">确定</h-button></div>
    <div class="btn-placeholder"><h-button size="large" class="btn-basic btn-large" :style="styleObj">确定</h-button></div>
  </div>
</template>

<script>
export default {
    name:'PreviewButton',
    props: ['btnStatus','bgColor','textColor','borderColor'],
    computed: {
      styleObj(){
        return {
          backgroundColor:this.bgColor,
          color:this.textColor,
          borderColor:this.borderColor,
        }
      }
    }
}
</script>
<style scoped>
  .btn-placeholder{
    display: inline-block;
    /* width: 210px; */
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .item{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn-state-text{
    width: 96px;
    height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #000000;
    text-align: center;
    line-height: 60px;
    font-weight: 400;
  }
  .btn-basic{
    font-weight: 400;
    font-family: PingFangSC-Regular;
    pointer-events: none;
  }
  .btn-small{
    width: 40px;
    height: 20px;
    line-height: 12px;
  }
  .btn-middle{
    width: 68px;
    height: 28px;
    font-size: 14px;
    line-height: 14px;
  }
  .btn-large{
    width: 120px;
    height: 32px;
    font-size: 14px;
    line-height: 14px;
  }
</style>