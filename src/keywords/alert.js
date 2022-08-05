const alertKeywords = {
  base: {
    settings:[
      {
        settingName: '标题颜色',
        defaultColor: "alertMessageColor",
        changeMethod: "changeAlertMessageColor"
      },
      {
        settingName: '描述颜色',
        defaultColor: "alertDescColor",
        changeMethod: "changeAlertDescColor"
      },
      {
        settingName: '关闭颜色',
        defaultColor: "alertCloseIconfontColor",
        changeMethod: "changeAlertCloseIconfontColor"
      },
    ]
  },
  success:{
    settings:[
      {
        settingName: '边框颜色',
        defaultColor: "alertSuccessBorderColor",
        changeMethod: "changeAlertSuccessBorderColor"
      },
      {
        settingName: '背景颜色',
        defaultColor: "alertSuccessBgcolor",
        changeMethod: "changeAlertSuccessBgcolor"
      },
      {
        settingName: '图标颜色',
        defaultColor: "alertSuccessIconColor",
        changeMethod: "changeAlertSuccessIconColor"
      },
    ]
  },
  info: {
    settings:[
      {
        settingName: '边框颜色',
        defaultColor: "alertInfoBorderColor",
        changeMethod: "changeAlertInfoBorderColor"
      },
      {
        settingName: '背景颜色',
        defaultColor: "alertInfoBgcolor",
        changeMethod: "changeAlertInfoBgcolor"
      },
      {
        settingName: '图标颜色',
        defaultColor: "alertInfoIconColor",
        changeMethod: "changeAlertInfoIconColor"
      },
    ]
  },
  warnning: {
    settings: [
      {
        settingName: '边框颜色',
        defaultColor: "alertWarningBorderColor",
        changeMethod: "changeAlertWarningBorderColor"
      },
      {
        settingName: '背景颜色',
        defaultColor: "alertWarningBgcolor",
        changeMethod: "changeAlertWarningBgcolor"
      },
      {
        settingName: '图标颜色',
        defaultColor: "alertWarningIconColor",
        changeMethod: "changeAlertWarningIconColor"
      },
    ]
  },
  error: {
    settings: [
      {
        settingName: '边框颜色',
        defaultColor: "alertErrorBorderColor",
        changeMethod: "changeAlertErrorBorderColor"
      },
      {
        settingName: '背景颜色',
        defaultColor: "alertErrorBgcolor",
        changeMethod: "changeAlertErrorBgcolor"
      },
      {
        settingName: '图标颜色',
        defaultColor: "alertErrorIconColor",
        changeMethod: "changeAlertErrorIconColor"
      },
    ]
  },
}

export default alertKeywords