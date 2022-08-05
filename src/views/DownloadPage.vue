<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <div class="container">
          <div class="skinsCard">
            <h-card style="width: 250px; margin: 5px;" v-for="skin in this.skins" :key="skin.name">
              <p slot="title">
                <h-icon name="ios-list-outline"></h-icon>
                {{ skin.SkinName ? skin.SkinName : '未命名' }}
              </p>
              <h-button type="info" @click="() => clicked = !clicked">导出</h-button>
              <h-msg-box
                v-model="clicked"
                :escClose="true"
                title="导出皮肤"
              >
              <div class="btnGroup">
                <h-button type="info" @click="getJS(skin.SkinName)">导出为JS文件</h-button>
                <h-button type="info" @click="getSCSS(skin.SkinName)">导出SCSS文件</h-button>
              </div>
              </h-msg-box>
            </h-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '../components/TopBar.vue'
export default {
  components: {topbar},
  data () {
    return {
      clicked: false,
      skins: [],
      newSkinName: ''
    }
  },
  methods: {
    // 利用生成一个a标签并点击来实现文件下载
    download (data, name, type) {
      var a = document.createElement('a')
      var file = new Blob([data], { type: type })
      a.href = URL.createObjectURL(file)
      a.download = name
      a.dispatchEvent(new MouseEvent('click', { 'bubbles': false, 'cancelable': true }))
    },
    getSCSS (skinName) {
      fetch(`http://localhost:7001/convert/scss/${skinName}`)
        .then(response => response.text())
        .then(data => {
          this.download(data, `${skinName}.scss`, 'text/plain')
        })
    },
    getJS (skinName) {
      fetch(`http://localhost:7001/convert/js/${skinName}`)
        .then(response => response.text())
        .then(data => {
          this.download(data, `${skinName}.js`, 'text/plain')
        })
    },
  },
  created () {
    this.skin = fetch('http://localhost:7001/skins/')
      .then(response => response.json())
      .then(data => { this.skins = data })
      .catch(error => alert(error))
  }
}

</script>

<style scoped>
.layout {
  height:100vh;
}
.layout-content {
  background: #dde8f5;
  height: calc(100% - 60px);
}
.container {
  margin: 0 10%;
}
.createInput {
  padding: 20px;
  display: flex;
}
.skinsCard {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.btnGroup {
  display: flex;
  justify-content: space-evenly;
}
</style>


