<template>
    <div id="products" class="box">
        <div class="products--header has-text-centered">
            <router-link to="/profile" class="nav-link">
                <i class="fa fa-2x fa-user-circle"></i>
            </router-link>
        </div>
        <div class="product-list">
            <div
                v-for="productItem in productItems"
                :key="productItem.id"
                class="product-list--item"
            >
                <ProductListItem :productItem="productItem"/>
            </div>
        </div>
        <div class="product-count has-text-right">
            <span class="has-text-weight-bold"
                ># of products: {{ productItems.length }}</span
            >
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem";

export default {
    name: "ProductList",
	computed: {
		...mapGetters([
			"productItems"
		])
	},
	created() {
		this.$store.dispatch("getProductItems");
	},
    components: {
        ProductListItem,
    },
};
</script>

<style scoped>
.tag {
    cursor: pointer;
}

.products--header {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 15px;
    background-color: black;
    border-radius: 50px;
}

.product-list {
    padding-top: 10px;
}

.product-list--item {
    padding: 10px 0;
    background-color: black;
    color: rgb(21, 174, 221);
}
    
.box {
    background-color: black;
    border-radius: 50px;
}
</style>
