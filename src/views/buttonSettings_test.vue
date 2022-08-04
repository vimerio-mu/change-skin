<template>
  <div>
    <div class="layout">
      <topbar />
      <div class="layout-content">
        <sidebar/>
        <div class="layout-content-main">
          <!-- 组件预览 -->
            <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
              <titledContainer title="主按钮">
                <!-- 小、中、大标识 -->
                <div class="btn-size">
                  <span style="width:96px;"></span>
                  <span>小</span>
                  <span>中</span>
                  <span>大</span>
                </div>
                <ul class="ul-container">
                  <div class="item">
                    <p class="state-text" v-for="btnState in btnStates">{{btnState}}</p>
                  </div>
                  <li v-for="btn in btnList">
                    <div class="item">
                      <!-- <p class="state-text">{{btns.btnState}}</p>  -->
                      <previewButton v-for="btnItem in btn.btns" :size="btn.size" :btnClass="btn.btnClass" :btnItem="btnItem"/>
                    </div>
                  </li>
                </ul>
              </titledContainer>
            </componentPreview>
            <!-- 组件修改 -->
            <componentSettings style="flex: 1; padding: 8px">
              <titledContainer title="主按钮">
                <ul>
                  <li v-for="btn in btnList">
                    <settingsTitle :title="btn.title"/>
                    <ul class="settings-list">
                      <settingsItem v-for="btnItem in btn.btns" :btnTitle="btn.title"/>
                    </ul>
                  </li>
                </ul>
              </titledContainer>
          </componentSettings>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '../components/TopBar.vue'
import sidebar from '../components/SideBar.vue'
import componentPreview from '../components/ComponentPreview.vue'
import componentSettings from '../components/ComponentSettings.vue'
import titledContainer from '../components/TitledContainer.vue'
import previewButton from '../components/PreviewButton.vue'
import settingsItem from '../components/SettingsItem.vue'
import settingsTitle from '../components/SettingsTitle.vue'
import { mapState } from 'vuex'
export default {
  components: {topbar, sidebar, componentPreview, componentSettings,titledContainer,previewButton,settingsItem,settingsTitle},
  data() {
    return {
      btnStates:['默认','滑过','按下','禁止'],
    }
  },
  computed: {
    ...mapState('button',[
      'btnDefaultColor',
      'btnDefaultBg',
      'btnDefaultBorder',
      'btnDefaultHoverColor',
      'btnDefaultHoverBgcolor',
      'btnDefaultHoverBorderColor',
      'btnDefaultPressColor',
      'btnDefaultPressBgcolor',
      'btnDefaultPressBorderColor',
      'btnSmallDefaultColor',
      'btnSmallDefaultBg',
      'btnSmallDefaultBorder',
      'btnSmallDefaultHoverColor',
      'btnSmallDefaultHoverBgcolor',
      'btnSmallDefaultHoverBorderColor',
      'btnSmallDefaultPressColor',
      'btnSmallDefaultPressBgcolor',
      'btnSmallDefaultPressBorderColor',
      'btnDisableColor',
      'btnDisableBg',
      'btnDisableBorder',
    ]),
    btnList(){
      return [
        { // 小按钮
          title:'小按钮',
          size:'small',
          btnClass:'btn-small',
          btns:[
            // 默认按钮
            {btnState:'', bgColor:this.btnSmallDefaultBg,textColor:this.btnSmallDefaultColor,borderColor:this.btnSmallDefaultBorder},
            // 滑过按钮
            {btnState:'', bgColor:this.btnSmallDefaultHoverBgcolor,textColor:this.btnSmallDefaultHoverColor,borderColor:this.btnSmallDefaultHoverBorderColor},
            // 按下按钮
            {btnState:'', bgColor:this.btnSmallDefaultPressBgcolor, textColor:this.btnSmallDefaultPressColor, borderColor:this.btnSmallDefaultPressBorderColor},
            // 禁止按钮
            {btnState:'', bgColor:this.btnDisableBg, textColor:this.btnDisableColor, borderColor:this.btnDisableBorder},
        ]},
        { // 中按钮
          title:'中按钮',
          btnClass:'btn-middle',
          btns:[
            // 默认按钮
            {btnState:'', bgColor:this.btnDefaultBg,textColor:this.btnDefaultColor,borderColor:this.btnDefaultBorder},
            // 滑过按钮
            {btnState:'', bgColor:this.btnDefaultHoverBgcolor,textColor:this.btnDefaultHoverColor,borderColor:this.btnDefaultHoverBorderColor},
            // 按下按钮
            {btnState:'', bgColor:this.btnDefaultPressBgcolor, textColor:this.btnDefaultPressColor, borderColor:this.btnDefaultPressBorderColor},
            // 禁止按钮
            {btnState:'', bgColor:this.btnDisableBg, textColor:this.btnDisableColor, borderColor:this.btnDisableBorder},
        ]},
        { // 大按钮
          title:'大按钮',
          size:'large',
          btnClass:'btn-large',
          btns:[
            // 默认按钮
            {btnState:'', bgColor:this.btnDefaultBg,textColor:this.btnDefaultColor,borderColor:this.btnDefaultBorder},
            // 滑过按钮
            {btnState:'', bgColor:this.btnDefaultHoverBgcolor,textColor:this.btnDefaultHoverColor,borderColor:this.btnDefaultHoverBorderColor},
            // 按下按钮
            {btnState:'', bgColor:this.btnDefaultPressBgcolor, textColor:this.btnDefaultPressColor, borderColor:this.btnDefaultPressBorderColor},
            // 禁止按钮
            {btnState:'', bgColor:this.btnDisableBg, textColor:this.btnDisableColor, borderColor:this.btnDisableBorder},
        ]},
      ]
    },
  },
}
</script>

<style scoped>
.layout-content {
  background: #dde8f5;
  display: flex;
}
.layout-content-main {
  background: #ffffff;
  margin-left: 8px;
  flex: 1;
  display: flex;
}
.btn-size{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btn-size span{
  display: inline-block;
  width: 210px;
  height: 60px;
  /* 文字样式 */
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #000000;
  text-align: center;
  line-height: 60px;
  font-weight: 400;
}
.btn-list{
    display: flex;
    justify-content: space-around;
    margin: 16px auto;
}

  .ul-container{
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
  }
  .item{
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .state-text{
    width: 96px;
    height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #000000;
    text-align: center;
    line-height: 60px;
    font-weight: 400;
  }
</style>
