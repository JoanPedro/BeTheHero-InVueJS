import Vue from 'vue'
import VueRouter from 'vue-router'

import Logon from '@/components/logon/Logon'
import Register from '@/components/register/Register'
import Profile from '@/components/profile/Profile'
Vue.use(VueRouter)

const routes = [{
    name: 'Logon',
    path: '/',
    component: Logon
}, {
    name: 'Register',
    path: '/register',
    component: Register
}, {
    name: 'Profile',
    path: '/profile',
    component: Profile
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router