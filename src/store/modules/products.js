
var state = {
	all:[] //获取的商品
}

var mutations = {
 	
	receive_product:function(state, products) {
		state.all = products;
	},

	add_to_cart: function(state, productInfo) {
        // 每个商品的库存
        console.log(state.all.find(function(p) {
            return p.id === productInfo.id;
        }).inventory)

		state.all.find(function(p) {
			return p.id === productInfo.id;
		}).inventory --;
	},

	delete_cart_product:function(state, productInfo) {

		state.all.find(function(p) {
		  return p.id === productInfo.id;
		}).inventory ++
	}
}




export default {
    state,
    mutations
}
