import Vue from 'vue'
import VueRouter from 'vue-router'

import Logon from '@/components/logon/Logon'

Vue.use(VueRouter)

const routes = [{
   name: 'Logon',
   path: '/',
   component: Logon
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router