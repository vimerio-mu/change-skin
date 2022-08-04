<template>
    <div class="btn-placeholder"><h-button class="btn-basic" :size="size" :class="btnClass" :style="styleObj">确定</h-button></div>
</template>

<script>
export default {
    name:'PreviewButton',
    props: ['btnItem'],
    computed: {
      size(){ return this.btnItem.size },
      btnClass() { return this.btnItem.btnClass },
      styleObj(){
        return {
          backgroundColor:this.btnItem.bgColor,
          color:this.btnItem.textColor,
          borderColor:this.btnItem.borderColor,
        }
      }
    }
}
</script>
<style scoped>
  .btn-placeholder{
    display: inline-block;
    width: 210px;
    height: 60px;
    line-height: 60px;
    text-align: center;
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