<template>
    <div class="imformation">
        <div v-if="item">
            <h2>{{ item.title }}</h2>
            <p class="item__description">{{ item.description }}</p>
            <div v-if="item.id==1">
                <img src="../assets/iPhone13.png" class="smartphone">
            </div>
            <div v-if="item.id==2">
                <img src="../assets/iPhone12.png" class="smartphone">
            </div>
            <div v-if="item.id==3">
                <img src="../assets/iPadAir.png" class="ipad">
            </div>
            <div v-if="item.id==4">
                <img src="../assets/iPadPro.png" class="ipad">
            </div>
            <div v-if="item.id==5">
                <img src="../assets/AirPodsMax.png" class="airpod">
            </div>
            <div v-if="item.id==6">
                <img src="../assets/AirPodsPro.png" class="airpod">
            </div>
            <div v-if="item.id==7">
                <img src="../assets/Watch.png" class="watch">
            </div>
        </div>
        <h2 v-else>Not Found :(. Pick a product from the list!</h2>
    </div>
</template>

<script>
export default {
   name: "HomeItem",
    props: {
        item: {
            title: String,
            description: String,
        },
    },
};
</script>
<style scoped>
html,
body {
    background-color: rgba(26, 90, 119, 0.568);
}   
.item__description {
  max-width: 800px;
  margin: 0 auto;
}
h2{
    margin: 20px auto;
    color: rgb(25, 152, 211);
}
.imformation{
    text-align: center;
    color: rgb(114, 182, 209);
    font-size: 22px;
    
}
.smartphone{
    margin: 20px;
    width: 200px;
    border-radius: 30px;
}
.ipad{
    margin: 20px;
    width: 500px;
    border-radius: 30px;
}
.airpod{
    margin: 20px;
    width: 500px;
    border-radius: 30px;
}
.watch{
    margin: 20px;
    width: 900px;
    border-radius: 30px;
}
</style>
