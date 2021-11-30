<template>
    <div id="app" >
        <head ><i class="fas fa-shopping-cart"></i></head>
        <div v-if="!error"><FormShop /></div>
        <div class="ads">️🎊️🎉Chào mừng thành viên mới của SHOPPING AIR. ️️🎉️️🎊</div> 
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <CartList />
                </div>
                <div class="column is-9">
                    <ProductList />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CartList from "./components/cart/CartList";
import ProductList from "./components/product/ProductList";

export default {
    name: "Form",
    components: {
        CartList,
        ProductList
    },
}
</script>

<style>
html,
body {
    background: #0b5568e0;
}


#app {
    align-items: center;
    justify-content: center;
}

@media screen and (min-width: 769px) {
    html,
    body {
        height: 100%;
        background-color: rgba(12, 83, 100, 0.658);
    }
}
.ads{
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    color: rgb(39, 139, 101);
    border-radius: 50px;
    margin: 10px;
    text-align: center;
    font-size: 25px;
}
</style>
