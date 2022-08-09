<template>
  <div class="layout-content-main">
    <componentPreview :skinName="this.$router.history.current.params.name" style="flex:2;padding:8px">
      <titledContainer title="基础用法">
        <div>
          <h-select v-model="model1" style="width:200px">
              <h-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</h-option>
            </h-select>
        </div>
      </titledContainer>
      <titledContainer title="禁用">
        <div>
          <h-select v-model="model5" disabled style="width:200px">
            <h-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</h-option>
          </h-select>
          <h-select v-model="model6" style="width:200px">
            <h-option value="beijing">北京市</h-option>
            <h-option value="shanghai" disabled>上海市</h-option>
            <h-option value="shenzhen">深圳市</h-option>
          </h-select>
          <h-select v-model="model12" style="width:200px">
            <h-option disabled v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</h-option>
          </h-select>
        </div>
      </titledContainer>
      <titledContainer title="多选">
        <div>
          <h-select v-model="model10" multiple style="width:200px">
            <h-option value="beijing">北京市</h-option>
            <h-option value="shanghai" disabled>上海市</h-option>
            <h-option value="shenzhen">深圳市</h-option>
            <h-option value="guangzhou">广州市</h-option>
            <h-option value="hangzhou">杭州市</h-option>
            <h-option value="changchun">长春市</h-option>
            <h-option value="changsha">长沙市</h-option>
          </h-select>
        </div>
      </titledContainer>
      <titledContainer title="尺寸">
        <div>
          <h-select v-model="model2" size="small" style="width:100px">
            <h-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</h-option>
          </h-select>
          <h-select v-model="model3" style="width:100px">
            <h-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</h-option>
          </h-select>
          <h-select v-model="model4" size="large" style="width:100px">
            <h-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</h-option>
          </h-select>
        </div>
      </titledContainer>
      <titledContainer title="分组">
        <div>
          <h-select v-model="model7" style="width:200px">
            <h-option-group label="热门城市">
              <h-option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</h-option>
            </h-option-group>
            <h-option-group label="其它城市">
              <h-option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</h-option>
            </h-option-group>
          </h-select>
        </div>
      </titledContainer>
      <titledContainer title="远程搜索自定义图标">
        <div>
          <h-select
            style="width:260px"
            v-model="model13"
            filterable
            remote
            :remote-method="remoteMethod1"
            remoteIcon="search"
            :loading="loading1"
            :loading-text="model15">
            <h-option v-for="option in options1" :value="option.value" :key="option.value">{{option.label}}</h-option>
          </h-select>
        </div>
      </titledContainer>
    </componentPreview>
    <componentSettings style="flex:1;margin:16px">
    <titledContainer title="基础设置">
        <settingLine 
        v-for="setting of selectKeywords.base.settings" :key="setting.settingName"
        :settingName="setting.settingName" :defaultColor="vm.$store.state.select[setting.defaultColor]" :changeMethod="setting.changeMethod"/>
    </titledContainer>
    </componentSettings>
  </div>
</template>

<script>
import componentPreview from '../../components/ComponentPreview.vue'
import componentSettings from '../../components/ComponentSettings.vue'
import titledContainer from '../../components/TitledContainer.vue'
import settingLine from '../../components/SettingLine.vue'
import selectKeywords from '../../keywords/select.js'
export default {
  components: {componentPreview, componentSettings,titledContainer,settingLine},
  data() {
    return {
      vm: this,
      selectKeywords,
      cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 1,
            label: '南京市'
          },
          {
            value: 2,
            label: '重庆市'
          },
          {
            value: 'guangzhou',
            label: '广州市'
          },
          {
            value: 'changsha',
            label: '长沙市'
          },
          {
            value: 'changchun',
            label: '长春市'
          },
          {
            value: 'ningbo',
            label: '宁波市'
          },
          {
            value: 'shaoxing',
            label: '绍兴市'
          },
          {
            value: 'huhehaote',
            label: '呼和浩特市'
          }
        ],
      cityList1: [
        {
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        }
      ],
      cityList2: [
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        },
        {
          value: 'changsha',
          label: '长沙市'
        },
        {
          value: 'changchun',
          label: '长春市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        }
      ],
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      model5: '',
      model6: '',
      model7: '',
      model10: [],
      model12: '',
      model13: '',
      model14: [],
      model15: '加载测试中',
      loading1: false,
      options1: [],
      list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
      }
  },
  methods: {
      remoteMethod1 (query) {
        if (query !== '') {
          this.loading1 = true
          setTimeout(() => {
            this.loading1 = false
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              }
            })
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
          }, 200)
        } else {
          this.options1 = []
        }
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