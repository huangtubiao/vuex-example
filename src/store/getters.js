

//商品列表
var allProducts = function(state) {
	return state.products.all;
}


//购物车商品
var cartProducts = function(state) {
	return state.cart.added;  
}


//购物车商品总价
var allprice = function(state) {

	var products = state.cart.added;
	var allprice = 0;

	//遍历获取每个产品数量和单价，获得单个产品总价

	for (var i = products.length - 1; i >= 0; i--) {  
		allprice += products[i].price * products[i].num;
	}

	return allprice;
}

//提示信息
var messageInfo = function(state) {
	return state.cart.messageInfo;
}

export default{
	allProducts,
	cartProducts,
	allprice,
	messageInfo
}
