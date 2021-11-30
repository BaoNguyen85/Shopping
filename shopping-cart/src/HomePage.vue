<template>
	<div class="item">
		<h2>CÁC SẢN PHẨM NỔI BẬT</h2>
		<router-link class="aa"
			v-for="item in itemList"
			:key="item"
			:to="`/items/${item}`"
		>
        {{ item }}
		</router-link> 
		<router-view />
	</div>
</template>

<script>
export default {
    name: "Homepage",
    components: {},
    data() {
        return {
            itemList: [
                "iPhone 12",
                "iPhone 13",
                "iPad Air",
                "iPad Pro",
                "AirPods Max",
                "AirPods Pro",
                "Apple Watch Series 7",
            ],
        };
    },
};
</script>

<style>

ul {
  list-style-type: none;
  padding: 0;
}
h2{
  font-size: 30px;
}
li {
  margin: 0 10px;
}

.aa {
  color: #3ed893;
  padding:10px;
  font-size: 20px;
}
.item{
    text-align: center;
    max-width: 900px;
    margin:60px auto;
}
</style>
