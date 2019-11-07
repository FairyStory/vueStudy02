import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import content from "../views/content"

Vue.use(VueRouter);//全局注册VueRouter

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'home',
        // redirect: '/IndexManage',
        component: Home,
        children: [
            {
                path:"/",
                name:"content",
                component: content,
            }
        ]
    },

    ]
})

export default router