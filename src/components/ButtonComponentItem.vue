<template>
  <div class="item">
    <p class="state-text">默认</p> 
    <div class="btn-placeholder"><h-button size="small" class="btn-small">确定</h-button></div>
    <div class="btn-placeholder"><h-button size="default"class="btn-middle">确定</h-button></div>
    <div class="btn-placeholder"><h-button size="large" class="btn-large">确定</h-button></div>
  </div>
</template>

<script>
export default {
    name:'ButtonComponentItem',
    // props: ['btnState','title','color'],
}
</script>

<style scoped>
  .item{
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .btn-placeholder{
    display: inline-block;
    width: 210px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .btn-small{
    width: 40px;
    height: 20px;
    line-height: 12px;
    font-weight: 400;
    color: #fff;
    font-family: PingFangSC-Regular;
  }
  .btn-middle{
    width: 68px;
    height: 28px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #fff;
    font-family: PingFangSC-Regular;
  }
  .btn-large{
    width: 120px;
    height: 32px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #fff;
    font-family: PingFangSC-Regular;
  }
  .state-text{
    width: 96px;
    height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    text-align: center;
    line-height: 60px;
    font-weight: 400;
  }
</style>