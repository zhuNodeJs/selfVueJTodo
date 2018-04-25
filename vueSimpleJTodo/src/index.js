import Vue from 'vue';
import App from './App.vue';

// 引入外部资源包

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(App)
}).$mount(root);