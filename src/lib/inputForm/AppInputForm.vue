<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import * as _ from 'lodash';
export default Vue.extend({
    name: 'app-input-form',
    data: () => ({
        event: {
            name: '',
            email: '',
            date: '',
            isoDate: '',
            location: '',
            attendees: '',
            id: '',
        },
        nameRules: validationRules.forName,
        emailRules: validationRules.forEmail,
        locationRules: validationRules.forLocation,
        attendeesRules: validationRules.forAttendees,
        error: [],
    }),
    created() {
        const eventId = this.$route.params.eventId;

        // if eventId is present in the route path it means that event already exists
        // and user wants not to create a new one, but to update an existing one
        if (eventId) {
            try {
                this.$store.commit('SET_EVENT_EDITING', true);
                this.$store.dispatch('getEventById', eventId).then((res) => {
                    const eventEdited = res.data[0];

                    // // Saving existing event to current data
                    this.event = {
                        ..._.pick(eventEdited, [
                            'name',
                            'email',
                            'date',
                            'isoDate',
                            'location',
                            'attendees',
                            'id',
                        ]),
                    };
                });
            } catch (e) {
                console.error(e);
            }
        }
    },
    methods: {
        submit() {
            try {
                if (
                    !this.event.name ||
                    !this.event.email ||
                    !this.event.date ||
                    !this.event.location ||
                    !this.event.attendees
                ) {
                    this.error.push('Fill the form!');
                    return false;
                } else {
                    this.error = [];

                    // Creating event object by extracting properties from data
                    // works both for new and updated events
                    const eventAdded = {
                        ..._.pick(this.event, [
                            'name',
                            'email',
                            'date',
                            'location',
                            'attendees',
                        ]),
                        isoDate: this.createIsoDate(this.event.date),
                        id: this.event.id ? this.event.id : Math.random(),
                    };

                    if (this.event.id) {
                        this.$store
                            .dispatch('updateEvent', eventAdded)
                            .then((res) => {
                                if (res.status === 200) {
                                    this.$store.commit('SET_MODAL_STATE', {
                                        modalStateType: 'SUCCESS_EVENT_EDIT',
                                        showModal: true,
                                    });
                                    this.$store.commit(
                                        'EDIT_EVENT_IN_STORE',
                                        eventAdded
                                    );
                                    this.$store.commit(
                                        'SET_EVENT_EDITING',
                                        false
                                    );
                                }
                            })
                            .catch((err) => {
                                console.error(err);
                                this.$store.commit('SET_MODAL_STATE', {
                                    modalStateType: 'FAILURE_EVENT_EDIT',
                                    showModal: true,
                                });
                            });
                    } else {
                        this.$store
                            .dispatch('addEvent', eventAdded)
                            .then((res) => {
                                if (res.status === 200) {
                                    this.$store.commit('SET_MODAL_STATE', {
                                        modalStateType: 'SUCCESS_EVENT_ADD',
                                        showModal: true,
                                    });
                                    this.$store.commit(
                                        'ADD_EVENT_TO_STORE',
                                        eventAdded
                                    );
                                }
                            })
                            .catch((err) => {
                                console.error(err);
                                this.$store.commit('SET_MODAL_STATE', {
                                    modalStateType: 'FAILURE_EVENT_ADD',
                                    showModal: true,
                                });
                            });
                    }
                    this.$refs.meetupForm.reset();
                }
            } catch (e) {
                throw new Error(e);
            }
        },
        createIsoDate(date) {
            return new Date(date).toISOString();
        },
    },
});

const validationRules = {
    forName: [(v) => !!v || 'Name is required'],
    forEmail: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    forLocation: [(v) => !!v || 'Location is required'],
    forAttendees: [
        (v) => !!v || 'Attendees are required',
        (v) => /[0-9]/.test(v) || 'Should be a number',
    ],
};
</script>
