<template>
  <h-switch :size="size" :type="type" v-model="switch1" :style="switch1?'':styleObj">
    <slot></slot>
    <!-- <div slot="open">开</div>
    <div slot="close">关</div> -->
  </h-switch>
</template>

<script>
export default {
    props: {
      'size':{
        default:null
      },
      'type':{
        default:null
      },
    },
    data() {
      return {
        switch1:false
      }
    },
    computed: {
      styleObj(){
        return {
          backgroundColor:this.$store.state.switch.switchBackgroundColor,
          borderColor:this.$store.state.switch.switchBorderColor
        }
      }
    }
}
</script>