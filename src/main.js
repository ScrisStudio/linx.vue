// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
//import cordova from './mobile-index' // 打开此行代码的注释可以打 cordova 的包

Vue.config.productionTip = false;
Vue.use(ElementUI);


//cordova.onDeviceReady = () => { // 打开此行代码的注释可以打 cordova 的包
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
//} // 打开此行代码的注释可以打 cordova 的包
//cordova.initialize(); // 打开此行代码的注释可以打 cordova 的包
