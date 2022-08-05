<template>
  <div class="titledContainer">
    <div class="titleBlock">
      <div class="coloredBlock">
        <!-- 标题旁边的色块 -->
      </div>
      <span class="title"> {{ title }} </span>
      <div class="titleLine">
        <!-- 线 -->

      </div>
      <!-- 收起的icon -->
      <div @click="setOpened" v-if="isOpened">
        <h-icon name="doublearrow" color="#b1b1b1" size="16"></h-icon>
      </div>
      <div @click="setOpened" v-if="!isOpened" style="transform: rotateX(180deg) translateY(-20%)">
        <h-icon name="doublearrow" color="#b1b1b1" size="16"></h-icon>
      </div>
    </div>
    <div v-if="isOpened" >
      <slot>
        <!-- 这里是容器中的具体内容 -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpened: true
    }
  },
  props: {
    title: String
  },
  methods: {
    setOpened() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style>
.titledContainer {
  width: 100%;
  margin: 8px;
}
.titleBlock {
  height: 16px;
  width: 100%;
  display: flex;
}
.coloredBlock {
  display: inline-block;
  background: #037df3;
  height: 14px;
  width: 4px;
  margin-right: 4px;
}
.title {
  font-size: 14px;
  color: #333333;
  line-height: 14px;
  font-weight: 600;
}
.titleLine {
  display: inline-block;
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, #D9D9D9 , #D9D9D9  4px, transparent 2px, transparent);
  background-size: 6px 100%;
  margin: 7px 8px 0 8px;
}
</style>