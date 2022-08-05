<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div style="width: 800px">
          <h-edit-gird :columns="columns6" :data="data1" :option="options1" :treeOption="treeOption" ></h-edit-gird>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of editgridKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.editgrid[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import editgridKeywords from '../../keywords/editgrid.js'

let tData = [
  {
    name: '王小明',
    age: 18,
    address: '北京市朝阳区芍药居',
    money: '120.00',
    cardId: '6223 5678 1234 5678',
    city: '北京',
    dating: '2018-01-09T16:00:00.000Z',
    timing: '16:00:00.00',
    tree: 'leaf1',
    _disableExpand: true
    // _highlight: true//默认选择当前项
  },
  {
    name: '张小刚',
    age: 25,
    address: '北京市海淀区西二旗',
    money: '130.00',
    cardId: '6223 5678 1234 5678',
    city: '北京',
    dating: '2018-01-09T16:00:00.000Z',
    timing: '16:00:00.00',
    tree: 'leaf1',
    _expanded: true
  },
  {
    name: '李小红',
    age: 30,
    address: '上海市浦东新区世纪大道',
    money: '140.00',
    cardId: '6223 5678 1234 5678',
    city: '北京',
    dating: '2018-01-09T16:00:00.000Z',
    timing: '16:00:00.00',
    tree: 'leaf1'
  },
  {
    name: '周小伟',
    age: 26,
    address: '深圳市南山区深南大道',
    money: '150.00',
    cardId: '6223 5678 1234 5678',
    city: '北京',
    dating: '2018-01-09T16:00:00.000Z',
    timing: '16:00:00.00',
    tree: 'leaf1'
  }
]

export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      editgridKeywords,
      columns6: [
          {
            type: 'expand',
            width: 50,
            render: () => {
              return null
            }
          },
          {
            type: 'text',
            title: '姓名',
            key: 'name',
            width: 200,
            rule: { required: true, message: '姓名不能为空' },
            typeWidth: 120,
            render: (h, params) => {
              return h('div', [
                h('h-button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    'click': () => {
                      this.show(params.index)
                    }
                  }
                }, '查看')
              ])
            }
          },
          {
            type: 'number',
            title: '年龄',
            width: 100,
            key: 'age',
            hiddenCol: false,
            rule: { required: true, message: '年龄不能为空' }
          },
          {
            type: 'textArea',
            rows: 2,
            width: 200,
            title: '地址',
            key: 'address',
            rule: { required: true, message: '地址不能为空' }
          },
          {
            type: 'money',
            title: '金额',
            width: 100,
            integerNum: 14,
            suffixNum: 3,
            // suffixNum: 2,
            bigTips: true,
            key: 'money',
            rule: { required: true, message: '金额不能为空' }
          },
          {
            type: 'card',
            title: '卡号',
            width: 200,
            key: 'cardId',
            rule: { required: true, message: '卡号不能为空' }
          },
          {
            type: 'select',
            title: '地区',
            width: 100,
            key: 'city',
            multiple: false,
            option: [],
            rule: { required: true, message: '请选择城市' }
          },
          {
            type: 'date',
            title: '日期',
            width: 200,
            key: 'dating',
            dateType: 'date',
            format: 'yyyy-MM-dd',
            rule: { required: true, message: '请选择日期' }
          },
          {
            type: 'time',
            title: '时间',
            width: 100,
            key: 'timing',
            dateType: 'time',
            format: 'HH:mm:ss',
            steps: [2, 2, 2],
            rule: { required: true, message: '请选择时间' }
          },
          {
            type: 'selectTree',
            title: '下拉树',
            width: 200,
            key: 'tree',
            treeData: [{
              expand: true,
              title: 'parent 1',
              children: [{
                title: 'parent 1-0',
                expand: true,
                children: [{
                  title: 'leaf1',
                  disableCheckbox: true
                }, {
                  title: 'leaf2'
                }]
              }, {
                title: 'parent 1-1',
                expand: true,
                checked: true,
                children: [{
                  title: 'leaf3'
                }]
              }]
            }],
            showCheckbox: false,
            checkStrictly: false,
            rule: { required: true, message: '请选择子节点' }
          }
        ],
        data1: tData,
        options1: [],
        treeOption: []
    }
  },
  mounted () {
      this.treeOption[10] = [{
        expand: true,
        title: 'parent 1',
        children: [{
          title: 'parent 1-0',
          expand: true,
          children: [{
            title: 'leaf1',
            disableCheckbox: true
          }, {
            title: 'leaf2'
          }]
        }, {
          title: 'parent 1-1',
          expand: true,
          checked: true,
          children: [{
            title: 'leaf3'
          }]
        }]
      }]
      this.options1[7] = [{ value: 'Alabama', label: 'Alabama' }, { value: 'beijing', label: '北京' }, { value: 'Delaware', label: 'Delaware' }]
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