import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const createStore = () =>
    new Vuex.Store({
        state: {
            events: [],
        },
        mutations: {
            FETCH_EVENTS(state, events) {
                state.events = events;
            },
        },
        actions: {
            getEvents({ commit }) {
                axios
                    .get('http://localhost:8000/all-events')
                    .then((response) => {
                        commit('FETCH_EVENTS', response.data);
                    })
                    .catch((err) => console.log(err));
            },
            addEvent(state, event) {
                axios
                    .post('http://localhost:8000/event-add', event)
                    .then(() => {
                        console.log('Event added');
                    })
                    .catch((err) => console.log(err));
                // show user event was added/not (error propagation)
            },
        },
    });
