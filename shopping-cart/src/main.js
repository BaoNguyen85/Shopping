import { createApp } from "vue";
import App from "./App.vue";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import router from "./router";
import { handle } from "./common/promise";

createApp(App)
    .mixin({
        methods: {
        handle,
        },
    })
    .use(store)
    .use(router)
    .mount("#app");
