<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <div class="container">
          <div class="createInput">
            <h-input v-model="newSkinName" placeholder="请输入新皮肤名称">
            </h-input>
            <h-button type="info" @click="createSkin" style="margin-left: 8px">新建皮肤</h-button>
          </div>
          <div class="skinsCard">
            <h-card style="width: 250px; margin: 5px;" v-for="skin in this.skins" :key="skin.name">
              <p slot="title">
                <h-icon name="ios-list-outline"></h-icon>
                {{ skin.SkinName ? skin.SkinName : '未命名' }}
              </p>
              <h-button type="info" @click="intoSkin(skin.SkinName)">进入</h-button>
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
      skins: [],
      newSkinName: ''
    }
  },
  methods: {
    createSkin () {
      let newSkin = `{"SkinName": "${this.newSkinName}"}`
      if(this.newSkinName.length == 0) {
        this.$hMessage.error(`皮肤名不可为空！`)
        return
      }
      // 发送post请求，新增皮肤，除了name其他全部留空，之后保存时再put
      this.skin = fetch('http://localhost:7001/skins/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: newSkin
      })
        .then(() => this.$hMessage.info(`皮肤已经新建完成`))
        .catch(error => alert(error))
      // 重新将newSkinName设为空
      this.newSkinName = ''
    },
    intoSkin (skinName) {
      this.$router.push(`skins/${skinName}`)
      // 在这里直接修改store中的currentSkin的值
      this.$store.commit('changeCurrentSkin', skinName)
    }
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
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>


