<template>
    <div>
        <h2 class="has-text-weight-bold">
            {{ productItem.title }}
            <span
				@click="addCartItem(productItem)"
                class="tag is-pulled-right"
            >
                Thêm vào giỏ hàng
            </span>
        </h2>
        <p>{{ productItem.description }}</p>
        <span class="has-text-weight-bold">
            <p> <i class="fa fa-usd"></i>{{ productItem.price }}</p>    
        </span>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "ProductListItem",
    props: ["productItem"],
	methods: {
		...mapActions([
			"addCartItem"
		])
	}
};
</script>

<style scoped>
.tag {
    cursor: pointer;
}
span{
    background-color: rgb(8, 155, 118);
    color:white;
}
span p{
    color: rgb(39, 139, 101);
    background-color:black;
}
img{
    width: 20px;
}

</style>
