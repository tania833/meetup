import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPageVue from '../MainPage/MainPage.vue';
import AboutUsPage from '../AboutUsPage/AboutUsPage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/main-page', component: MainPageVue },
    { path: '/about-us-page', component: AboutUsPage },
];

export default new VueRouter({
    routes,
});
