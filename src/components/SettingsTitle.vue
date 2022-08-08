<template>
  <div>
      <div class="dot"></div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.dot {
  width: 6px;
  height: 6px;
  border: 1.5px solid rgba(3, 125, 243, 1);
  border-radius: 50%;
  display: inline-block;
}
.title{
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  line-height: 14px;
  font-weight: 600;
  display: inline-block;
  padding-left: 2px;
  margin-top: 10px;
}
</style>