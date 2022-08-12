<template>
  <div class="layout-content-main">
    <!-- 预览 -->
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px;">
      <titledContainer title="基础用法">
        <div class="table">
          <h-table :columns="columns1" :data="data1"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="斑马纹">
        <div class="table">
          <h-table stripe :columns="columns1" :data="data1"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="固定表头和列">
        <div class="table">
          <h-table width="550" height="200" :columns="columns2" :data="data2"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="多选">
        <div class="table">
          <h-table border :columns="columns3" :data="data1"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="尺寸">
        <div class="table">
          <h-table size="large" :columns="columns1" :data="data1"></h-table>
          <br />
          <h-table size="small" :columns="columns1" :data="data1"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="表格和分页">
        <div class="table">
          <h-table :data="tData" :columns="columns" style="margin-bottom: 8px;"></h-table>
          <h-page :total="totalNum" @on-change="dataChange" show-elevator show-total :page-size="5"></h-page>
        </div>
      </titledContainer>
      <titledContainer title="数据为空时显示的提示内容">
        <div class="table">
          <h-table :data="data3" :columns="columns1" border no-data-text="没有数据了"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="多表头和固定列">
        <div class="table">
          <h-table border :multiLevel="multiLevel1" :columns="columnsFixed" :data="dataFixed"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="加载中...">
        <div class="table">
          <h-table border loading :columns="columns1" :data="data1"></h-table>
        </div>
      </titledContainer>
      <titledContainer title="复杂示例">
        <div class="table" style="max-width:900px;">
          <div style="margin: 10px;">
            显示边框
            <h-switch v-model="showBorder" style="margin-right: 5px;"></h-switch>
            显示斑马纹
            <h-switch v-model="showStripe" style="margin-right: 5px;"></h-switch>
            显示索引
            <h-switch v-model="showIndex" style="margin-right: 5px;"></h-switch>
            显示多选框
            <h-switch v-model="showCheckbox" style="margin-right: 5px;"></h-switch>
            显示表头
            <h-switch v-model="showHeader" style="margin-right: 5px;"></h-switch>
            <br />
            <br />
            表格尺寸
            <Radio-group v-model="tableSize" type="button">
              <Radio label="large">大</Radio>
              <Radio label="default">中</Radio>
              <Radio label="small">小</Radio>
            </Radio-group>
            <br />
          </div>
          <h-table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="tableData1" :columns="tableColumns1"></h-table>
          <div style="margin: 10px; overflow: hidden;">
            <div style="float: right;">
              <h-page :total="100" :current="1" @on-change="changePage"></h-page>
            </div>
          </div>
        </div>
      </titledContainer>
    </componentPreview>
    <!-- 修改 -->
    <componentSettings style="flex:1;margin:16px">
      <titledContainer title="表格">
        <settingLine v-for="setting of tableKeywords.settings" :key="setting.settingName" :settingName="setting.settingName" :defaultColor="vm.$store.state.table[setting.defaultColor]"
          :changeMethod="setting.changeMethod" />
      </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import previewColorCard from '../../components/PreviewColorCard.vue'
import tableKeywords from '../../keywords/table.js'
import tableData from '../../keywords/tableData.js'

const formatDate = function (date) {
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
};

export default {
  components: { componentPreview, componentSettings, titledContainer, settingLine, previewColorCard },
  data () {
    return {
      vm: this,
      tableKeywords,
      tableData,
      columns1: tableData.columns1,
      data1: tableData.data1,
      columns2: tableData.columns2,
      data2: tableData.data2,
      columns3: tableData.columns3,
      data3: tableData.data3,
      tData: tableData.data.slice(0, 5),
      columns: tableData.columns,
      totalNum: tableData.data.length,
      multiLevel1: tableData.multiLevel1,
      columnsFixed: tableData.columnsFixed,
      dataFixed: tableData.dataFixed,
      tableColumns: [
        {
          title: '名称',
          key: 'name'
        },
        {
          title: '状态',
          key: 'status',
          render: (h, params) => {
            const row = params.row;
            const color =
              row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
            const text =
              row.status === 1
                ? '构建中'
                : row.status === 2
                  ? '构建完成'
                  : '构建失败';

            return h(
              'Tag',
              {
                props: {
                  type: 'dot',
                  color: color
                }
              },
              text
            );
          }
        },
        {
          title: '画像内容',
          key: 'portrayal',
          render: (h, params) => {
            return h(
              'Poptip',
              {
                props: {
                  trigger: 'hover',
                  title: params.row.portrayal.length + '个画像',
                  placement: 'bottom'
                }
              },
              [
                h('Tag', params.row.portrayal.length),
                h(
                  'div',
                  {
                    slot: 'content'
                  },
                  [
                    h(
                      'ul',
                      this.tableData1[params.index].portrayal.map((item) => {
                        return h(
                          'li',
                          {
                            style: {
                              textAlign: 'center',
                              padding: '4px'
                            }
                          },
                          item
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: '选定人群数',
          key: 'people',
          render: (h, params) => {
            return h(
              'Poptip',
              {
                props: {
                  trigger: 'hover',
                  title: params.row.people.length + '个客群',
                  placement: 'bottom'
                }
              },
              [
                h('Tag', params.row.people.length),
                h(
                  'div',
                  {
                    slot: 'content'
                  },
                  [
                    h(
                      'ul',
                      this.tableData1[params.index].people.map((item) => {
                        return h(
                          'li',
                          {
                            style: {
                              textAlign: 'center',
                              padding: '4px'
                            }
                          },
                          item.n + '：' + item.c + '人'
                        );
                      })
                    )
                  ]
                )
              ]
            );
          }
        },
        {
          title: '取样时段',
          key: 'time',
          render: (h, params) => {
            return h('div', '近' + params.row.time + '天');
          }
        },
        {
          title: '更新时间',
          key: 'update',
          render: (h, params) => {
            return h(
              'div',
              formatDate(this.tableData1[params.index].update)
            );
          }
        }
      ],
      tableData1: this.mockTableData1(),
      showBorder: false,
      showStripe: false,
      showHeader: true,
      showIndex: true,
      showCheckbox: false,
      fixedHeader: false,
      tableSize: 'default',
    }
  },
  computed: {
    tableColumns1 () {
      const columns = [];
      if (this.showCheckbox) {
        columns.push({
          type: 'selection',
          width: 60,
          align: 'center'
        });
      }
      if (this.showIndex) {
        columns.push({
          type: 'index',
          width: 60,
          align: 'center'
        });
      }
      const newColumns = columns.concat(this.tableColumns);
      return newColumns;
    }
  },
  methods: {
    dataChange (i) {
      this.tData = this.tableData.data.slice((i - 1) * 5, i * 5);
    },
    mockTableData1 () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          name: '商圈' + Math.floor(Math.random() * 100 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: [
            '城市渗透',
            '人群迁移',
            '消费指数',
            '生活指数',
            '娱乐指数'
          ],
          people: [
            {
              n: '客群' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: '客群' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            },
            {
              n: '客群' + Math.floor(Math.random() * 100 + 1),
              c: Math.floor(Math.random() * 1000000 + 100000)
            }
          ],
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        });
      }
      return data;
    },
    changePage () {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.tableData1 = this.mockTableData1();
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
.tag-group {
  margin-top: 10px;
}
.table {
  max-width: 700px;
  margin: 0 auto;
}
</style>