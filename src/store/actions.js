
//调用获取产品的
import api_product from '../api/products.js' 

//调用获取商品列表方法的action
var getAllProducts = function(context) {
	var commit = context.commit;
	api_product.getProducts(function(products) {
		commit("receive_product", products)
	})
} 

//调用增加购物车商品列方法的action
var addToCart = function(context, productInfo) {
	var commit = context.commit;

	if (productInfo.inventory > 0) {     //库存大于0的时候可以调用
		commit("add_to_cart", productInfo)
	}
}

var deleteCartProduct = function(context, productInfo) {
	var commit = context.commit;

	if (productInfo.num > 0) {
		commit("delete_cart_product", productInfo)
	}
}


var submitCart = function(context) {
	var commit = context.commit;
	commit("submit_cart_product");
}

export default {
	getAllProducts,
	addToCart,
	deleteCartProduct,
	submitCart,
}
