<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="显示单选框">
        <div>
          <h-select-table v-model="model2" @on-change="change">
            <h-table-option border :columns="columns1" :data="data1" @on-select="select" :rowSelect="true"></h-table-option>
          </h-select-table>
        </div>
      </titledContainer>
      <titledContainer title="显示多选框">
        <div>
          <h-select-table v-model="model1" :multiple="true" @on-change="change" isCheckall>
            <h-table-option border :columns="columns1" :data="data1"></h-table-option>
          </h-select-table>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of selecttableKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.selecttable[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import selecttableKeywords from '../../keywords/selecttable.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      selecttableKeywords,
      model1: [],
      model2: '王小明_18',
      val: '',
      matchCol: ['name', 'age'],
      columns1: [
        {
          title: '姓名',
          key: 'name',
          ellipsis: true
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
          // _highlight: true//默认选择当前项
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        },
        {
          name: '王小明1',
          age: 18,
          address: '北京市朝阳区芍药居'
          // _highlight: true//默认选择当前项
        },
        {
          name: '张小刚1',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红2',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟2',
          age: 26,
          address: '深圳市南山区深南大道'
        },
        {
          name: '周小伟3',
          age: 26,
          address: '深圳市南山区深南大道'
        },
        {
          name: '周小伟4',
          age: 26,
          address: '深圳市南山区深南大道'
        },
        {
          name: '周小伟5',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  },
  methods: {
      select (selection, row) { // 已选择的项和刚刚选择的项
        console.log(selection)
        console.log(row)
      },
      change (e) {
        console.log(e)
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