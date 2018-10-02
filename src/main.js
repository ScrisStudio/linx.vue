// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import cordova from './mobile-index';

Vue.config.productionTip = false;
Vue.use(ElementUI);

if(process.env.LINX_AGENT == 'cordova') 
{
  
  cordova.onDeviceReady = () => {
  /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
  cordova.initialize();

} else {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
  });
}