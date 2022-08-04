<template>
  <div class="settings-item">
    <p class="state-text">{{colorItem.btnState}}</p> 
    <h-card dis-hover class="card" :style="styleObj"></h-card>
    <h-icon name="lock" class="icon"></h-icon>
    <input type="text" class="input" v-model="color" @blur="changeColor($event.target.value)" @keyup.enter="handleBlur($event)"/>
  </div>
</template>

<script>
export default {
    name:'SettingsItem',
    props: ['btnTitle','colorItem'],
    computed: {
      color:{
        get(){
          return this.colorItem.color
        },
        set(color){
          this.changeColor(color);
        }
      },
      styleObj(){
        let bgColor = this.color.toLowerCase();
        let borderColor = this.color;
        if(bgColor == '#fff' || bgColor == '#ffffff' || bgColor == 'white'){
          borderColor = '#D9D9D9'
        }
        return {
          backgroundColor:bgColor,
          borderColor:borderColor
        }
      },
    },
    methods: {
      changeColor(color){
        if(color.trim()){
          this.$store.dispatch('button/changeColor',{
            color:color.trim(),
            btnState:this.colorItem.btnState, // 默认，滑过，按下，禁止
            btnTitle:this.btnTitle, // 信息色等，大中小按钮
          });
        }
      },
      handleBlur(e){
          e.target.blur()
      },

    },
}
</script>

<style scoped>
  .settings-item{
    height: 28px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .card{
    width: 40px;
    height: 20px;
    margin-right: 8px;
  }
  .state-text{
    width: 95px;
    height: 28px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    text-align: right;
    line-height: 28px;
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