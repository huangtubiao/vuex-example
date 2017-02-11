<template>
    <div id="app">
        <img src="./assets/logo.png">
        <hello></hello>
        <h2>我的购物车</h2>
        <products></products>
        <cart></cart>
    </div>
</template>

<script>
import Hello from './components/Hello'
import products from './components/products.vue'
import cart from './components/cart.vue'

export default {
    name: 'app',
    components:{ Hello, products, cart }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
