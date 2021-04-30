import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import MainPage from '../MainPage.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuex);

const mockActions = {
    getEvents: jest.fn(),
};

const mockMutations = {
    SET_FILTER_DATES: jest.fn(),
};

const store = new Vuex.Store({
    state: {
        events: [],
    },
    actions: mockActions,
    mutations: mockMutations,
});

describe('MainPage.vue', () => {
    let vuetify

    beforeEach(() => {
      vuetify = new Vuetify()
    })

    it('calls getEvents', () => {
        const wrapper = mount(MainPage, {
            localVue,
            store,
            vuetify
        });
        expect(mockActions.getEvents).toBeCalled();
    });

    it('call SET_FILTER_DATES mutation on filter button click', () => {
        const wrapper = mount(MainPage, {
            localVue,
            store,
            vuetify
        });
        wrapper.find('.v-btn').trigger('click');
        expect(mockMutations.SET_FILTER_DATES).toBeCalled();
    });
});
