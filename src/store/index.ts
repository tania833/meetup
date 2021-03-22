import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const createStore = () =>
    new Vuex.Store({
        state: {
            meetings: [],
        },
        mutations: {
            FETCH_MEETINGS(state, meetings) {
                state.meetings = meetings;
            },
        },
        getters: {
            allMeetings: (state) => {
                return state.meetings;
            },
        },
        actions: {
            getMeetings({ commit }) {
                axios
                    .get('http://localhost:8000/all-events')
                    .then((response) => {
                        commit('FETCH_MEETINGS', response.data);
                    })
                    .catch((err) => console.log(err));
            },
            addMeeting(state, meeting) {
                console.log(meeting);
                axios
                    .post('http://localhost:8000/event-add', meeting)
                    .then(() => {
                        console.log('Event added');
                    })
                    .catch((err) => console.log(err));
            },
        },
    });
