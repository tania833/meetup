import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../MainPage/MainPage.vue';
import CreateEventPage from '../CreateEventPage/CreateEventPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/main-page',
        component: MainPage,
        beforeEnter: (to, from, next) => {
            next((vm) => {
                vm.$store.dispatch('getEvents');
            });
        },
    },
    { path: '/create-event-page', component: CreateEventPage },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
