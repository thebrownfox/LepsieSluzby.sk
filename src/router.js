import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
//
// Dynamic chunks - only loaded when reloaded
//
const NotFound = () => import("./views/not_found.vue");
const home = () => import("./views/home.vue");
const podnet = () => import("./views/podnet.vue");
const success = () => import("./views/success.vue");
const error = () => import("./views/error.vue");


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
            path: "/podnet",
            component: podnet,
        },
        {
            path: "/success",
            component: success,
        },
        {
            path: "/error",
            name: "error",
            component: error,
            props: true
        },
    ],
});