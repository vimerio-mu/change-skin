<template>
  <div>
    <div class="nameContainer">
        <div class="nameTitle">{{ skinName }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    skinName:String
  }
}
</script>

<style>
.nameContainer {
  background: #f7f7f7;
  width: 100%;
  height: 36px;
  margin: 8px;
}
.nameTitle {
  padding: 8px;
  font-size: 14px;
  color: #333333;
  text-align: left;
  font-weight: 600;
}
</style>