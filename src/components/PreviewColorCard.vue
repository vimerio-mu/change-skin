<template>
    <div class="color-preview">
        <p class="color-p">{{previewTitle}}</p>
        <div class="color-div" :style="{backgroundColor:previewColor}"></div>
    </div>
</template>

<script>
export default {
    props: ['previewTitle','previewColor'],
}
</script>

<style>
.color-preview {
  display: flex;
  justify-content: center;
  height: 60px;
  line-height: 60px;
  margin:40px auto;
  text-align: right;
  color:black;
  font-weight: 500;
  font-size: 16px;
  font-family: PingFangSC-Medium;
}
.color-p{
  width: 20%;
  margin-right: 30px;
}
.color-div{
  height: 60px;
  width: 50%;
  border-radius: 3px;
}
</style>