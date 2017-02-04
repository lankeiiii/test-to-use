import Vue from 'vue'
import example from './components/Example.vue'

/*require('./bootstrap');*/
// Vue.component('example', require('./components/Example.vue'));
const app = new Vue({
    el: '#app',
    components:{ example }
});
