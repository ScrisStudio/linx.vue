<template>
  <div id="mmain">
    <el-card class="box-card" shadow="hover" id="today">
      <div id="linxwelcome" class="today"> {{linxwelcome}} </div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="taskmain">
      <div id="linx" class="today"> 
        <p>Linx.vue is a CLI tool to create applications that run on Web, Mobile Phones and Standalone Devices in a go. </p>
        <p>I hope you will like it.</p>
      </div>
		</el-card>
  </div>
</template>

<script>
export default {
  name: 'linx',
  components: {

  },
  data() {
    return {
      linxwelcome: "Hello World!",
    };
  },
  methods: {

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
