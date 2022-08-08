<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div style="width: 800px">
          <h-button type="primary" @click="modal1 = true">显示对话框</h-button>
          <h-msg-box
            v-model="modal1"
            :escClose="true"
            title="普通的MsgBox对话框标题"
            @on-ok="ok"
            @on-cancel="cancel"
            :beforeEscClose="beforetest"
          >
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </h-msg-box>
        </div>
      </titledContainer>
      <titledContainer title="禁用关闭">  
        <div style="width: 800px">
          <h-button type="info" @click="modal7 = true"
            >禁用右上角关闭（含Esc键）</h-button
          >
          <h-msg-box title="对话框标题" v-model="modal7" :closable="false">
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </h-msg-box>
        </div>
      </titledContainer>
      <titledContainer title="确认弹框">  
        <div style="width: 800px">
          <h-button @click="confirm">标准</h-button>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of msgboxKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.msgbox[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import msgboxKeywords from '../../keywords/msgbox.js'

export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      msgboxKeywords,
      modal1: false,
      modal7: false,
      modal8: false,
    }
  },
  methods: {
    beforetest() {
        return true;
      },
      ok() {
        this.$hMessage.info("点击了确定");
      },
      cancel() {
        this.$hMessage.info("点击了取消");
      },
    confirm() {
      this.$hMsgBox.confirm({
        title: "确认对话框标题",
        content: "<p>一些对话框内容</p><p>一些对话框内容</p>",
        onOk: () => {
          this.$hMessage.info("点击了确定");
        },
        onCancel: () => {
          this.$hMessage.info("点击了取消");
        },
      });
    }
  },
}
</script>

<style>
.layout-content-main {
  background: #ffffff;
  margin: 8px;
  flex: 1;
  display: flex;
}

</style>