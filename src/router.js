import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//
// Dynamic chunks - only loaded when reloaded
//
const NotFound = () => import("./views/not_found.vue");
const home = () => import("./views/home.vue");
const projekt = () => import("./views/projekt.vue");
const podnet = () => import("./views/podnet.vue");
const success = () => import("./views/success.vue");


export default new Router({
    mode: "history",
    scrollBehavior: () => ({
        y: 0,
    }),
    routes: [
        {
            path: "*",
            component: NotFound,
        },
        {
            path: "/",
            component: home
        },
        {
            path: "/projekt",
            component: projekt,
        },
        {
            path: "/podnet",
            component: podnet,
        },
        {
            path: "/success",
            component: success,
        },
    ],
});