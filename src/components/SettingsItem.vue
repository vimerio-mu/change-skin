<template>
  <div class="item">
    <p class="state-text">{{btnState}}</p> 
    <h-button class="btn" :style="styleObj"></h-button>
    <h-icon name="lock" class="icon"></h-icon>
    <input type="text" class="input" @blur="changeColor($event)" @keyup.enter="handleBlur($event)"/>
  </div>
</template>

<script>
export default {
    name:'settingsItem',
    props: ['btnState','title','color'],
    computed: {
      styleObj(){
        return {
          backgroundColor:this.color,
          borderColor:this.color
        }
      },
    },
    methods: {
      changeColor(e){
        if(e.target.value.trim()){
          this.$store.dispatch('button/changeColor',{
            color:e.target.value.trim(),
            btnState:this.btnState,
            title:this.title,
            })
        }
      },
      handleBlur(e){
          e.target.blur()
      }
    },
}
</script>

<style scoped>
  .item{
    height: 28px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .btn{
    width: 40px;
    height: 20px;
    margin-right: 8px;
  }
  .state-text{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    text-align: right;
    line-height: 14px;
    font-weight: 400;
    margin-right: 8px;
  }
  .icon{
    color: #969696;
    font-size: 18px;
    margin-right: 8px;
  }
  .input{
    height: 28px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 2px;
    margin-right: 6px;
    text-indent: 8px;
    /* 文字 */
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    text-align: left;
    line-height: 14px;
    font-weight: 400;
  }
  
</style>