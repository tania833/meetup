import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../pages/MainPage/MainPage.vue';
import CreateEventPage from '../pages/CreateEventPage/CreateEventPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPage,
        beforeEnter: (to, from, next) => {
            next((vm) => {
                vm.$store.dispatch('getEvents');
            });
        },
    },
    { path: '/create-event-page', component: CreateEventPage },
    {
        path: '/create-event-page/:eventId',
        name: 'eventEditPage',
        component: CreateEventPage,
        props: true,
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
