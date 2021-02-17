import Vue from 'vue';
import app from './App.vue';
import './index.scss';

const App = new Vue({
    el: '#root',
    render: (h) => h(app),
});
