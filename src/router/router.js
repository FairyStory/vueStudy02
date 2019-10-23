import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);//全局注册VueRouter

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'home',
        // redirect: '/IndexManage',
        component: Home,
        children: []
    },

    ]
})

export default router