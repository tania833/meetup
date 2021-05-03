import Vue from 'vue';
import Vuex from 'vuex';
import { IEvent, IDateFilter, IModalState } from '../types/types';
import {
    getEventsApi,
    addEventApi,
    deleteEventApi,
    getEventByIdApi,
    editEventApi,
} from '../api/api';
Vue.use(Vuex);

export interface ITypesState {
    events: IEvent[];
    dates: IDateFilter;
    modalState: IModalState;
    eventEditing: boolean;
}

export const createStore = () =>
    new Vuex.Store({
        state: {
            events: [],
            dates: {
                from: '',
                to: '',
            },
            modalState: {
                modalStateType: '',
                showModal: false,
            },
            eventEditing: false,
        },
        mutations: {
            FETCH_EVENTS(state, events: IEvent[]) {
                state.events = events;
            },
            ADD_EVENT_TO_STORE(state, event: IEvent) {
                state.events.push(event);
            },
            EDIT_EVENT_IN_STORE(state, eventEdited: IEvent) {
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
            DELETE_EVENT_FROM_STORE(state, eventId: number) {
                const filteredEvents = state.events.filter(
                    (el) => el.id != eventId
                );
                state.events = filteredEvents;
            },
            SET_MODAL_STATE(state, value: IModalState) {
                const { modalStateType, showModal } = value;
                state.modalState.modalStateType = modalStateType;
                state.modalState.showModal = showModal;
            },
            SET_FILTER_DATES(state, value: IDateFilter) {
                state.dates = value;
            },
            SET_EVENT_EDITING(state, value) {
                state.eventEditing = value;
            },
        },
        actions: {
            getEvents({ commit }) {
                getEventsApi({
                    from: this.state.dates.from,
                    to: this.state.dates.to,
                })
                    .then((response) => {
                        commit('FETCH_EVENTS', response.data);
                    })
                    .catch((err) => console.error(err));
            },
            addEvent(state, event: IEvent) {
                return addEventApi(event);
            },
            deleteEvent(state, eventId: number) {
                return deleteEventApi(eventId);
            },
            getEventById(state, eventId: number) {
                return getEventByIdApi(eventId);
            },
            updateEvent(state, editedEvent: IEvent) {
                return editEventApi(editedEvent);
            },
        },
    });
