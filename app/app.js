import Vue from 'nativescript-vue';
import FTNS from '@friendly-tnsvue/vue-plugin';
import Home from './components/Home';

Vue.use(FTNS);

Vue.config.silent = false;

new Vue({
  render: h => h('Frame', [h(Home)])
}).$start();
