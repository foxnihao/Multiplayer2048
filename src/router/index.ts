import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [{
    path: '/classic',
    component: () => import('../components/ClassicGame.vue')
}, {
    path: '/duel',
    component: () => import('../components/DuelGame.vue')
}, {
    path: '/',
    component: () => import('../App.vue')
}, {
    path: '/local',
    component: () => import('../components/LocalGame.vue')
}
, {
    path: '/remote',
    component: () => import('../components/RemoteGame.vue')
}
, {
    path: '/battle',
    component: () => import('../components/Battle.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router