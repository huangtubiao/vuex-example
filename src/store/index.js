import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import products from './modules/products.js'
import cart from './modules/cart.js'

Vue.use(Vuex)

export default new Vuex.Store ({
	state:{
		count: 11,
	},
	actions,
	getters,
	mutations: {
		
	},
	modules:{
        products: products,
        cart: cart,
	},
})
