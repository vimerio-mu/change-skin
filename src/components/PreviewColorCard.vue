<template>
    <div class="color-preview">
        <div class="color-text">{{previewTitle}}</div>
        <div class="color-div" :style="styleObject"></div>
    </div>
</template>

<script>
export default {
    props: ['previewTitle','previewColor'],
    computed: {
      styleObject(){
        let color = this.previewColor.toLowerCase()
        if(color == 'white' || color == '#fff' || color=='#ffffff'){
          color = 'lightGrey'
        }
        return {
          backgroundColor:this.previewColor,
          borderColor:color,
        }
      }
    }
}
</script>

<style>
.color-preview {
  display: flex;
  justify-content: space-around;
  height: 60px;
  line-height: 60px;
  margin:40px auto;
  color:black;
  font-weight: 500;
  font-size: 16px;
  font-family: PingFangSC-Medium;
}
.color-text{
  display: flex;
  justify-content: flex-start;
  width: 30%;
  min-width: 280px;
  /* margin-right: 30px; */
}
.color-div{
  height: 60px;
  width: 60%;
  min-width: 40px;
  border-radius: 3px;
  border: 1px solid;
}
</style>