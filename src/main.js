import Vue from 'vue'
import App from './App'
import store from './store'


/* eslint-disable no-new */
new Vue({
    el: '#myApp',
    store,
    render: h => h(App)
    // template: '<App/>',
    // components: { App }
})
