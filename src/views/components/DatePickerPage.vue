<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-date-picker :value="value1" format="yyyy年MM月dd日" type="date"
            placeholder="选择日期"
            style="width: 200px"></h-date-picker>
          <h-date-picker :value="value2" format="yyyy/MM/dd"
            type="daterange" placement="bottom-end"
            placeholder="选择日期"
            style="width: 200px"></h-date-picker>
        </div>
      </titledContainer>
      <titledContainer title="datetime与daterange">
        <div>
          <h5>datetime类型</h5>
          <h-date-picker type="datetime" placeholder="选择日期和时间"
            style="width: 200px"></h-date-picker>
          <h-date-picker type="datetime" format="yyyy-MM-dd HH:mm"
            placeholder="选择日期和时间（不含秒）"
            style="width: 200px"></h-date-picker>
          <h5>datetimerange类型</h5>
          <h-date-picker type="datetimerange" placeholder="选择日期和时间"
            style="width: 200px"></h-date-picker>
            <h-date-picker type="datetimerange" format="yyyy-MM-dd HH:mm"
              placeholder="选择日期和时间（不含秒）"
              style="width: 200px"></h-date-picker>
        </div>
      </titledContainer>
      <titledContainer title="年和月">
        <div>
          <h-date-picker type="year" placeholder="选择年"
                               style="width: 200px"></h-date-picker>
          <h-date-picker type="month" placeholder="选择月"
                               style="width: 200px"></h-date-picker>
        </div>
      </titledContainer>
      <titledContainer title="快捷方式">
        <div>
          <h-date-picker type="date" :options="options1" placeholder="选择日期" style="width: 200px"></h-date-picker>
          <h-date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px"></h-date-picker>
        </div>
      </titledContainer>
      <titledContainer title="不可选日期">
        <div>
          <h-date-picker type="date" :options="options3" placeholder="选择日期" style="width: 200px"></h-date-picker>
          <h-date-picker type="date" :options="options4" placeholder="选择日期" style="width: 200px"></h-date-picker>
        </div>
      </titledContainer>
      <titledContainer title="尺寸">
        <div>
          <h-date-picker size="small" type="date" placeholder="选择日期"></h-date-picker>
          <h-date-picker type="date" placeholder="选择日期"></h-date-picker>
          <h-date-picker size="large" type="date" placeholder="选择日期"></h-date-picker>
        </div>
      </titledContainer>
      <titledContainer title="状态">
        <div>
          <h-date-picker type="date" placeholder="禁用" :disabled=true></h-date-picker>
          <h-date-picker type="date" placeholder="只读" :readonly=true></h-date-picker>
          <h-date-picker size="large" type="date" placeholder="不可编辑" :editable=false></h-date-picker>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of datepickerKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.datepicker[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import datepickerKeywords from '../../keywords/datepicker.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      datepickerKeywords,
      value1: '2016-01-01',
        value2: ['2016-01-01', '2016-02-15'],
        options1: {
          shortcuts: [
            {
              text: '今天',
              value () {
                return new Date()
              },
              onClick: () => {
                alert('点击了今天')
              }
            },
            {
              text: '昨天',
              value () {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24)
                return date
              },
              onClick: () => {
                alert('点击了昨天')
              }
            },
            {
              text: '一周前',
              value () {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                return date
              },
              onClick: () => {
                alert('点击了一周前')
              }
            }
          ]
        },
        options2: {
          shortcuts: [
            {
              text: '最近一周',
              value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                return [start, end]
              }
            },
            {
              text: '最近一个月',
              value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                return [start, end]
              }
            },
            {
              text: '最近三个月',
              value () {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                return [start, end]
              }
            }
          ]
        },
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000
          }
        },
        options4: {
          disabledDate (date) {
            const disabledDay = date.getDate()
            return disabledDay === 15
          }
        }
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

</style>