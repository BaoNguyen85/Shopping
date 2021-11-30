import { createWebHistory, createRouter } from "vue-router";
import store from "../store";
import HomeItem from "../components/HomeItem.vue";
import ProductService from "../services/product.service";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/UserLogin.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/UserRegister.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/UserProfile.vue"),
    },  
    {
        path: "/form",
        name: "Form",
        component: () => import("../Form.vue"),
    },
    {
        path: "/note",
        name: "Note",
        component: () => import("../Note.vue"),
    },
    {
        path: "/items/:slug",
        component: HomeItem,
        props: (route) => ({
            item: ProductService.get(route.params.slug),
        }),
    },
    {
        path: "/homepage",
        name: "HomePage",
        component: () => import("../HomePage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ["/login", "/register"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.getters.userLoggedIn;

    if (authRequired && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});

export default router;