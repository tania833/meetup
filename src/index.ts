import Vue from 'vue';
import app from './App.vue';
import './index.scss';
import { createStore } from './store/index';
import vuetify from './plugins/vuetify';

const App = new Vue({
    el: '#root',
    store: createStore(),
    vuetify,
    render: (h) => h(app),
});
