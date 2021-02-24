import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const createStore = () => new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment: (state) => state.count++,
        decrement: (state) => state.count--,
    },
});
