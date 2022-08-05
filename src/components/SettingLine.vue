<template>
  <div class="settingLine">
    <div class="settingTitle">
      {{ settingName }}
    </div>
    <div class="colorPreview" ref="colorPreview">
    </div>
      <!-- 父组件使用：<SettingLine @input="btn-danger-color" :settingName="警告色" :defaultColor:"#037DF3"> -->
    <input type="text" :value="defaultColor" @input="changeColor" class="colorTextInput" ref="colorInput">
  </div>
</template>

<script>
export default {
  props: {
    settingName: String,
    changeMethod: String,
    defaultColor: String
  },
  data() {
    return {
      // currentColor: this.props.color
    }
  },
  mounted() {
    // 更改本组件色块的值
    this.$refs.colorPreview.style.backgroundColor = this.$props.defaultColor
  },
  methods: {
    changeColor(e) {
      let color = e.target.value
      // 更改store中的值
      this.$store.commit(this.$props.changeMethod, color)
      // 更改本组件色块的值
      this.$refs.colorPreview.style.backgroundColor = color
    }
  }
}
</script>

<style>
.settingLine {
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 14px;
  color: #333333;
  text-align: left;
  line-height: 14px;
  font-weight: 400;
  margin-left: 40px;
  margin-bottom: 8px;
}
.colorPreview {
  height: 20px;
  width: 40px;
  border-radius: 3px;
  margin-left: 12px;
}
.colorTextInput {
  background: #FFFFFF;
  border: 1px solid rgba(217,217,217,1);
  border-radius: 2px;
  padding: 8px;
  margin-left: 32px;
  height: 28px;
  flex: 1;
}
</style>