<template>
  <div id="linx-main">
      <div id="linx-about" class="linx-about"> 
        <p>Linx.vue is a CLI tool to create applications that run on Web, Mobile Phones and Standalone Devices in one go. </p>
        <p>You are now using: <span v-html="linxagent"></span></p>
        <img src=".././assets/scris.png"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'linx',
  components: {

  },
  data() {
    return {
      linxagent:'',
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if(process.env.LINX_AGENT == 'cordova') this.linxagent = 'Mobile Phones'
      else if(process.env.LINX_AGENT == 'electron') this.linxagent = 'Standalone Devices'
      else this.linxagent = 'Web Environment'
    }
  }
};
</script>
<style>
  .el-card {
    margin-bottom: 10px;
  }
  .el-card:last-child {
      margin-bottom: 0;
  }
  .el-row {
    margin-bottom: 10px;
  }
  .el-row:last-child {
      margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-alert {
    margin-bottom: 8px;
  }
  .el-alert:last-child {
      margin-bottom: 0;
  }
</style>
