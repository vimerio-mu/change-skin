<template>
  <div class="saveBar">
      <h-button type="primary" class="saveBtn" @click="saveSkin">保存</h-button>
  </div> 
</template>

<script>
import components from '../keywords/components'
export default {
  computed: {

  },
  methods: {
    saveSkin () {
        let skinName = `{"SkinName": "${this.$store.state.currentSkin}"}`
        console.log(skinName)
        // 循环读取55个组件，然后stringify打成字符串并连接到一起
        let allSettings = ""
        for(let component of components) {
          allSettings += JSON.stringify(this.$store.state[component])
        }
        // 还需要一些调整，和现在的数据结构一致
        allSettings = allSettings.replaceAll('{', '')
        allSettings = allSettings.replaceAll('}', '')
        console.log(allSettings)
        // 发送更新请求
        // this.skin = fetch('http://localhost:7001/skins/' + this.$store.currentSkin, {
        //   method: 'put',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: skinName + ',' + allSettings
        // })
        //   .then(() => this.$hMessage.info(`保存成功`))
        //   .catch(error => alert(error))
      },
    }
}
</script>

<style>
.saveBar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 30%);
  background: #fff;
}
.saveBtn {
  height: 32px;
  width: 120px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  line-height: 14px;
  font-weight: 400;
}
</style>