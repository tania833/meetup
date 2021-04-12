import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const createStore = () =>
    new Vuex.Store({
        state: {
            events: [],
            dates: {
                from: '',
                to: '',
            },
            successEventAdded: false,
            failureEventAdding: false,
            successEventDeleted: false,
            failureEventDeleted: false,
            successEventEdit: false,
            failureEventEdit: false,
            eventEditing: false,
        },
        mutations: {
            FETCH_EVENTS(state, events) {
                state.events = events;
            },
            ADD_EVENT_TO_STORE(state, event) {
                state.events.push(event);
            },
            EDIT_EVENT_IN_STORE(state, eventEdited) {
                const eventPrevious = state.events.filter(
                    (el) => el.id === eventEdited.id
                );
                const indexOfEventEdited = state.events.indexOf(
                    eventPrevious[0]
                );
                if (indexOfEventEdited != -1) {
                    state.events[indexOfEventEdited] = eventEdited;
                }
            },
            DELETE_EVENT_FROM_STORE(state, eventId) {
                const filteredEvents = state.events.filter(
                    (el) => el.id != eventId
                );
                state.events = filteredEvents;
            },
            SUCCESS_EVENT_ADDED(state, value) {
                state.successEventAdded = value;
            },
            FAILURE_EVENT_ADDED(state, value) {
                state.failureEventAdding = value;
            },
            SUCCESS_EVENT_DELETE(state, value) {
                state.successEventDeleted = value;
            },
            FAILURE_EVENT_DELETE(state, value) {
                state.failureEventDeleted = value;
            },
            SET_EVENT_EDITING(state, value) {
                state.eventEditing = value;
            },
            SUCCESS_EVENT_EDIT(state, value) {
                state.successEventEdit = value;
            },
            FAILURE_EVENT_EDIT(state, value) {
                state.failureEventEdit = value;
            },
            SET_DATES(state, value) {
                state.dates = value;
            },
        },
        actions: {
            getEvents({ commit }) {
                axios
                    .get(
                        `http://localhost:8000/all-events/?from=${this.state.dates?.from}&to=${this.state.dates?.to}`
                    )
                    .then((response) => {
                        commit('FETCH_EVENTS', response.data);
                    })
                    .catch((err) => console.log(err));
            },
            addEvent(state, event) {
                return axios.post('http://localhost:8000/event-add', event);
            },
            deleteEvent(state, eventId) {
                return axios.post('http://localhost:8000/event-delete', {
                    id: eventId,
                });
            },
            getEventById(state, eventId) {
                return axios.post('http://localhost:8000/event-find-by-id', {
                    id: eventId,
                });
            },
            updateEvent(state, editedEvent) {
                return axios.post(
                    'http://localhost:8000/event-update',
                    editedEvent
                );
            },
        },
    });
