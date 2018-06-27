import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueCarousel from 'vue-carousel';
import App from './App.vue';

Vue.use(VueScrollTo, {
  duration: 600,
  easing: [.6, .01, .48, .99]
});

Vue.use(VueCarousel);

new Vue({
  el: '#app',
  render: h => h(App)
})
