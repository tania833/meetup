import Vue from 'vue';
import app from './App.vue';
import './index.scss';
import { createStore } from './store/index';
import router from './router';
import vuetify from './plugins/vuetify';

const App = new Vue({
    el: '#root',
    store: createStore(),
    vuetify,
    router,
    render: (h) => h(app),
});
