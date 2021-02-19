import Vue from 'vue';
import app from './App.vue';
import './index.scss';
import { createStore } from './store/index'

const App = new Vue({
    el: '#root',
    store: createStore(),
    render: (h) => h(app),
});
