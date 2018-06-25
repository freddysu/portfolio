import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';

Vue.use(VueScrollTo, {
  duration: 600,
  easing: [.6, .01, .48, .99]
});

new Vue({
  el: '#app',
  render: h => h(App)
})
