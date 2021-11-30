<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm">
      <div class="mr-auto navbar-nav">
        <li class="nav-item">
          <router-link to="/homepage" class="navbar-brand">
          SHOPPING AIR  <i class="fab fa-opencart"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/form" class="nav-link">
            Giỏ Hàng <i class="fas fa-shopping-cart"></i>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/note" class="nav-link">
            Ghi chú <i class="fas fa-marker"></i>
          </router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            Đăng ký
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            Đăng nhập
        </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logout"> Đăng xuất </a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { ProductService } from "./services/product.service";

export default {
  name: "FormShop",
  data() {
    return {
        product: [],
        currentProduct:null,
        currentIndex: -1,
        nameToSearch: "",
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "loggedInUser",
    }),
  },
  methods: {
    ...mapMutations([
      "initAuthState" 
    ]),

    logout() {
      this.$store.commit("logout");
      this.$router.push("login");
    },
  },

  setActiveProduct(product, index) {
    this.currentProduct = product;
    this.currentIndex = product ? index : -1;
  },

  async searchName() {
    const [error, response] = await this.handle(
        ProductService.findByName(this.nameToSearch)
    );
    if (error) {
        console.log(error);
    } else {
        this.product = response.data;
        this.setActiveProduct(null);
        console.log(response.data);
    }
  },

  mounted() {
    this.initAuthState();
  }
};
</script>
<style scoped>
nav {
  background-color: black;
  height: 70px;
}
nav a{
  color: rgb(88, 168, 182);
}

.button{
    color: white;
}
</style>

    
