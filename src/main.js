import Vue from 'vue';
import App from './App';
import { router } from './router';

import axios from 'axios'
Vue.prototype.$axios = axios


import { RadioGroup, Radio } from 'vant';
import { Button } from 'vant';
import { Toast } from 'vant';

Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Toast);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
