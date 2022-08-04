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
                <ul>
                  <li v-for="btns in btnsList">
                    <div class="item">
                      <p class="state-text">{{btns.btnState}}</p> 
                      <previewButton v-for="btnItem in btns.list" :btnItem="btnItem"/>
                    </div>
                  </li>
                </ul>
              </titledContainer>
            </componentPreview>
            <!-- 组件修改 -->
            <componentSettings style="flex: 1; padding: 8px">
              <titledContainer title="主按钮">
                <ul>
                  <li v-for="btn in btnSettingsList">
                    <settingsTitle :title="btn.title"/>
                    <ul>
                      <settingsItem v-for="item in btn.settingsList" :colorItem="item" :btnTitle="btn.title"/>
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
    btnsList(){
      return [
        {
          btnState:'默认',
          list:[
            { // 小按钮
              size:'small',
              btnClass:'btn-small',
              bgColor:this.btnSmallDefaultBg,
              textColor:this.btnSmallDefaultColor,
              borderColor:this.btnSmallDefaultBorder,
            },
            { // 中按钮（不设置size）
              btnClass:'btn-middle',
              bgColor:this.btnDefaultBg,
              textColor:this.btnDefaultColor,
              borderColor:this.btnDefaultBorder,
            },
            { // 大按钮（大按钮没有对应的样式属性，所以暂时设置成与default相同）
              size:'large',
              btnClass:'btn-large',
              bgColor:this.btnDefaultBg,
              textColor:this.btnDefaultColor,
              borderColor:this.btnDefaultBorder,
            },
          ]
        },
        {
          btnState:'滑过',
          list:[
            { // 小按钮
              size:'small',
              btnClass:'btn-small',
              bgColor:this.btnSmallDefaultHoverBgcolor,
              textColor:this.btnSmallDefaultHoverColor,
              borderColor:this.btnSmallDefaultHoverBorderColor,
            },
            { // 中按钮（不设置size）
              btnClass:'btn-middle',
              bgColor:this.btnDefaultHoverBgcolor,
              textColor:this.btnDefaultHoverColor,
              borderColor:this.btnDefaultHoverBorderColor,
            },
            { // 大按钮（大按钮没有对应的样式属性，所以暂时设置成与default相同）
              size:'large',
              btnClass:'btn-large',
              bgColor:this.btnDefaultHoverBgcolor,
              textColor:this.btnDefaultHoverColor,
              borderColor:this.btnDefaultHoverBorderColor,
            },
          ]
        },
        {
          btnState:'按下',
          list:[
            { // 小按钮
              size:'small',
              btnClass:'btn-small',
              bgColor:this.btnSmallDefaultPressBgcolor,
              textColor:this.btnSmallDefaultPressColor,
              borderColor:this.btnSmallDefaultPressBorderColor,
            },
            { // 中按钮（不设置size）
              btnClass:'btn-middle',
              bgColor:this.btnDefaultPressBgcolor,
              textColor:this.btnDefaultPressColor,
              borderColor:this.btnDefaultPressBorderColor,
            },
            { // 大按钮（大按钮没有对应的样式属性，所以暂时设置成与default相同）
              size:'large',
              btnClass:'btn-large',
              bgColor:this.btnDefaultPressBgcolor,
              textColor:this.btnDefaultPressColor,
              borderColor:this.btnDefaultPressBorderColor,
            },
          ]
        },
        {
          btnState:'禁止',
          // 因为对应的禁止样式只有一种，所以小中大按钮的禁止颜色设置为相同
          list:[
            { size:'small', btnClass:'btn-small', bgColor:this.btnDisableBg, textColor:this.btnDisableColor, borderColor:this.btnDisableBorder, },
            { btnClass:'btn-middle', bgColor:this.btnDisableBg, textColor:this.btnDisableColor, borderColor:this.btnDisableBorder, },
            { size:'large', btnClass:'btn-large', bgColor:this.btnDisableBg, textColor:this.btnDisableColor, borderColor:this.btnDisableBorder, },
          ]
        },
      ]
    },
    btnSettingsList(){
      return [
        {
          title:'小按钮',
          settingsList:[
            {btnState:'默认背景',color:this.btnSmallDefaultBg},
            {btnState:'默认边框',color:this.btnSmallDefaultBorder},
            {btnState:'默认文字',color:this.btnSmallDefaultColor},
            {btnState:'滑过背景',color:this.btnSmallDefaultHoverBgcolor},
            {btnState:'滑过边框',color:this.btnSmallDefaultHoverBorderColor},
            {btnState:'滑过文字',color:this.btnSmallDefaultHoverColor},
            {btnState:'按下背景',color:this.btnSmallDefaultPressBgcolor},
            {btnState:'按下边框',color:this.btnSmallDefaultPressBorderColor},
            {btnState:'按下文字',color:this.btnSmallDefaultPressColor},
            {btnState:'禁用背景',color:this.btnDisableBg},
            {btnState:'禁用边框',color:this.btnDisableBorder},
            {btnState:'禁用文字',color:this.btnDisableColor},
          ]
        },
        {
          title:'中按钮',
          settingsList:[
            {btnState:'默认背景',color:this.btnDefaultBg},
            {btnState:'默认边框',color:this.btnDefaultBorder},
            {btnState:'默认文字',color:this.btnDefaultColor},
            {btnState:'滑过背景',color:this.btnDefaultHoverBgcolor},
            {btnState:'滑过边框',color:this.btnDefaultHoverBorderColor},
            {btnState:'滑过文字',color:this.btnDefaultHoverColor},
            {btnState:'按下背景',color:this.btnDefaultPressBgcolor},
            {btnState:'按下边框',color:this.btnDefaultPressBorderColor},
            {btnState:'按下文字',color:this.btnDefaultPressColor},
            {btnState:'禁用背景',color:this.btnDisableBg},
            {btnState:'禁用边框',color:this.btnDisableBorder},
            {btnState:'禁用文字',color:this.btnDisableColor},
          ]
        },
        {
          title:'大按钮',
          settingsList:[
            {btnState:'默认背景',color:this.btnDefaultBg},
            {btnState:'默认边框',color:this.btnDefaultBorder},
            {btnState:'默认文字',color:this.btnDefaultColor},
            {btnState:'滑过背景',color:this.btnDefaultHoverBgcolor},
            {btnState:'滑过边框',color:this.btnDefaultHoverBorderColor},
            {btnState:'滑过文字',color:this.btnDefaultHoverColor},
            {btnState:'按下背景',color:this.btnDefaultPressBgcolor},
            {btnState:'按下边框',color:this.btnDefaultPressBorderColor},
            {btnState:'按下文字',color:this.btnDefaultPressColor},
            {btnState:'禁用背景',color:this.btnDisableBg},
            {btnState:'禁用边框',color:this.btnDisableBorder},
            {btnState:'禁用文字',color:this.btnDisableColor},
          ]
        }
      ];
    }
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
  .item{
    height: 60px;
    display: flex;
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
