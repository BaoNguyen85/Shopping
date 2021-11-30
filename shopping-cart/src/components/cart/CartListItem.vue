<template>
    <div>
        <p class="cart-item--title is-inline">{{ cartItem.title }}</p>
        <div class="is-pulled-right">
            <i	@click="addCartItem(cartItem)"
				class="fa fa-plus-circle cart-item--modify"></i>
            <i	@click="removeCartItem(cartItem)"
				class="fa fa-minus-circle cart-item--modify"></i>
        </div>
        <div class="cart-item--content">
            <span
                class="cart-item--price has-text-weight-bold"
            >
                {{ cartItem.price }}$
            </span>
            <span class="cart-item--quantity has-text-grey is-pulled-right">
                Số lượng: {{ cartItem.quantity }}
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "CartListItem",
    props: ["cartItem"],
	methods: {
		...mapActions([
			"addCartItem",
			"removeCartItem"
		])
	}
};
</script>

<style scoped>
.cart-item--modify {
    cursor: pointer;
    margin: 0 2px;
}
span{
    color: rgb(39, 139, 101);
}
</style>
