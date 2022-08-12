const tableData = {
  columns1: [
    {
      title: "姓名",
      key: "name",
    },
    {
      title: "年龄",
      key: "age",
    },
    {
      title: "地址",
      key: "address",
    },
  ],
  data1: [
    {
      name: "王小明",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "张小刚",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "李小红",
      age: 30,
      address: "上海市浦东新区世纪大道",
    },
    {
      name: "周小伟",
      age: 26,
      address: "深圳市南山区深南大道",
    },
  ],
  columns2: [
    {
      title: "姓名",
      key: "name",
      width: 100,
      fixed: "left",
    },
    {
      title: "年龄",
      key: "age",
      width: 100,
    },
    {
      title: "省份",
      key: "province",
      width: 100,
    },
    {
      title: "市区",
      key: "city",
      width: 100,
    },
    {
      title: "地址",
      key: "address",
      width: 200,
    },
    {
      title: "邮编",
      key: "zip",
      width: 100,
    },
    {
      title: "操作",
      key: "action",
      fixed: "right",
      width: 120,
      render: (h, params) => {
        return h("div", [
          h(
            "Button",
            {
              props: {
                type: "text",
                size: "small",
              },
            },
            "查看"
          ),
          h(
            "Button",
            {
              props: {
                type: "text",
                size: "small",
              },
            },
            "编辑"
          ),
        ]);
      },
    },
  ],
  data2: [
    {
      name: "王小明",
      age: 18,
      address: "北京市朝阳区芍药居",
      province: "北京市",
      city: "朝阳区",
      zip: 100000,
    },
    {
      name: "张小刚",
      age: 25,
      address: "北京市海淀区西二旗",
      province: "北京市",
      city: "海淀区",
      zip: 100000,
    },
    {
      name: "李小红",
      age: 30,
      address: "上海市浦东新区世纪大道",
      province: "上海市",
      city: "浦东新区",
      zip: 100000,
    },
    {
      name: "周小伟",
      age: 26,
      address: "深圳市南山区深南大道",
      province: "广东",
      city: "南山区",
      zip: 100000,
    },
    {
      name: "王小明",
      age: 18,
      address: "北京市朝阳区芍药居",
      province: "北京市",
      city: "朝阳区",
      zip: 100000,
    },
    {
      name: "张小刚",
      age: 25,
      address: "北京市海淀区西二旗",
      province: "北京市",
      city: "海淀区",
      zip: 100000,
    },
    {
      name: "李小红",
      age: 30,
      address: "上海市浦东新区世纪大道",
      province: "上海市",
      city: "浦东新区",
      zip: 100000,
    },
    {
      name: "周小伟",
      age: 26,
      address: "深圳市南山区深南大道",
      province: "广东",
      city: "南山区",
      zip: 100000,
    },
  ],
  columns3: [
    {
      type: "selection",
      width: 60,
      align: "center",
    },
    {
      title: "姓名",
      key: "name",
    },
    {
      title: "年龄",
      key: "age",
    },
    {
      title: "地址",
      key: "address",
    },
  ],
  data3:[],
  data: [
    {
      name: "王小明",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "张小刚",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "李小红",
      age: 30,
      address: "上海市浦东新区世纪大道",
    },
    {
      name: "周小伟",
      age: 26,
      address: "深圳市南山区深南大道",
    },
    {
      name: "王小明",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "张小刚",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "李小红",
      age: 30,
      address: "上海市浦东新区世纪大道",
    },
    {
      name: "周小伟",
      age: 26,
      address: "深圳市南山区深南大道",
    },
    {
      name: "11",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "12",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "13",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "14",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "15",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "16",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "17",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "18",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "19",
      age: 18,
      address: "北京市朝阳区芍药居",
    },
    {
      name: "20",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "21",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "22",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "23",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "24",
      age: 25,
      address: "北京市海淀区西二旗",
    },
    {
      name: "25",
      age: 25,
      address: "北京市海淀区西二旗",
    },
  ],
  columns: [
    {
      title: "姓名",
      key: "name",
    },
    {
      title: "年龄",
      key: "age",
    },
    {
      title: "地址",
      key: "address",
    },
  ],
  multiLevel1: [
    [{
      title: "多级固定左侧1-1",
      cols: 1,
      rows: 2,
      fixed: "left"
    },
    {
      title: "多级固定左侧1-2",
      cols: 2,
      rows: 1,
      fixed: "left"
    },
    {
      title: "多级1-1",
      cols: 1,
      rows: 2,
    },
    {
      title: "多级1-2",
      cols: 1,
      rows: 1,
    },
    {
      title: "多级固定右侧1-1",
      cols: 1,
      rows: 1,
      fixed: "right"
    },
    {
      title: "多级固定右侧1-2",
      cols: 1,
      rows: 2,
      fixed: "right"
    },
  ],
  [
    {
      title: "多级固定左侧2-2",
      cols: 1,
      rows: 1,
      fixed: "left"
    }, {
      title: "多级固定左侧2-3",
      cols: 1,
      rows: 1,
      fixed: "left"
    },
    {
      title: "多级2-2",
      cols: 1,
      rows: 1,
    },
    {
      title: "多级固定右侧2-2",
      cols: 1,
      rows: 1,
      fixed: "right"
    },
  ],
],
columnsFixed: [{
    title: "定长100固定左侧",
    key: "age",
    fixed: 'left',
    width: 100,
  },
  {
    title: "不定长固定左侧",
    key: "province",
    fixed: 'left'
  },
  {
    title: "不定长固定左侧",
    key: "province",
    fixed: 'left'
  },
  {
    title: "定长100",
    key: "age",
    width: 100,
  },
  {
    title: "不定长",
    key: "province",
  },
  {
    title: "定长100固定右侧",
    key: "age",
    width: 100,
    fixed: 'right'
  },
  {
    title: "不定长固定右侧",
    key: "province",
    fixed: 'right'
  },
],
dataFixed: [{
    name: "王小明",
    age: 18,
    address: "北京市朝阳区芍药居",
    province: "北京市",
    city: "朝阳区",
    zip: 100000,
  },
  {
    name: "张小刚",
    age: 25,
    address: "北京市海淀区西二旗",
    province: "北京市",
    city: "海淀区",
    zip: 100000,
  },
  {
    name: "李小红",
    age: 30,
    address: "上海市浦东新区世纪大道",
    province: "上海市",
    city: "浦东新区",
    zip: 100000,
  },
  {
    name: "周小伟",
    age: 26,
    address: "深圳市南山区深南大道",
    province: "广东",
    city: "南山区",
    zip: 100000,
  },
],
}
export default tableData