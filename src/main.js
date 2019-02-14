// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import cordova from './mobile-index';

Vue.config.productionTip = false;

if(process.env.LINX_AGENT == 'cordova') {
  cordova.onDeviceReady = () => {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
  cordova.initialize();
} else {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
  });
}