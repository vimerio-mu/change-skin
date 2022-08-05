<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-calendar :monthViewNum="2" :current-year="year" :current-month="month">
            <template slot="header">
              <h-date-picker
                type="month"
                v-model="date"
                @on-change="handleChange"
                :open="open"
              >
                <div class="date-input year" @click="togglePicker">
                  <span>{{ year + "年" }}</span>
                  <h-icon name="android-calendar"></h-icon>
                </div>
                <div class="date-input month" @click="togglePicker">
                  <span>{{ month + "月" }}</span>
                  <h-icon name="android-calendar"></h-icon>
                </div>
              </h-date-picker>
            </template>
          </h-calendar>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of calendarKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.calendar[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import calendarKeywords from '../../keywords/calendar.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      calendarKeywords,
      open: false,
      date: new Date(),
    }
  },
  computed: {
    month () {
      return this.date.getMonth() + 1
    },
    year () {
      return this.date.getFullYear()
    }
  },
  methods: {
    togglePicker () {
      this.open = !this.open
    },
    handleChange () {
      this.open = false
    }
  }
}
</script>

<style>
.layout-content-main {
  background: #ffffff;
  margin: 8px;
  flex: 1;
  display: flex;
}
.date-input {
  display: inline-block;
  background: #298dff;
  font-size: 16px;
  color: #fff;
  padding: 5px 8px;
  margin: 2px;
  border-radius: 3px;
  cursor: pointer;
}
.date-input.year {
  margin-left: 1.5%;
}
.date-input.month {
  margin-right: 1.5%;
}
</style>