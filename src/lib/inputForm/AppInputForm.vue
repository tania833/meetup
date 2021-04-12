<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'app-input-form',
    data: () => ({
        error: [],
        eventName: '',
        email: '',
        date: '',
        isoDate: '',
        location: '',
        attendees: '',
        id: '',
        valid: false,
        nameRules: [(v) => !!v || 'Name is required'],
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        dateRules: [
            (v) => !!v || 'Date is required',
            (v) =>
                /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
                    v
                ) || 'Date must be valid',
        ],
        locationRules: [(v) => !!v || 'Location is required'],
        attendeesRules: [(v) => !!v || 'Attendees are required'],
    }),
    created() {
        const eventId = this.$route.params.eventId;

        if (eventId) {
            this.$store.commit('SET_EVENT_EDITING', true);
            this.$store.dispatch('getEventById', eventId).then((res) => {
                const eventEdited = res.data[0];

                this.eventName = eventEdited.eventname;
                this.email = eventEdited.email;
                this.date = eventEdited.date;
                this.isoDate = eventEdited.isoDate;
                this.location = eventEdited.location;
                this.attendees = eventEdited.attendees;
                this.id = eventEdited.id;
            });
        }
    },
    methods: {
        submit() {
            if (
                !this.eventName ||
                !this.email ||
                !this.date ||
                !this.location ||
                !this.attendees
            ) {
                this.error.push('Fill the form!');
                return false;
            } else {
                this.error = [];

                const eventAdded = {
                    eventname: this.eventName,
                    email: this.email,
                    date: this.date,
                    isoDate: this.createIsoDate(this.date),
                    location: this.location,
                    attendees: this.attendees,
                    id: this.id ? this.id : Math.random(),
                };

                if (this.id) {
                    this.$store
                        .dispatch('updateEvent', eventAdded)
                        .then((res) => {
                            if (res.status === 200) {
                                this.$store.commit('SUCCESS_EVENT_EDIT', true);
                                this.$store.commit(
                                    'EDIT_EVENT_IN_STORE',
                                    eventAdded
                                );
                                this.$store.commit('SET_EVENT_EDITING', false);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            this.commit('FAILURE_EVENT_EDIT', true);
                        });
                } else {
                    this.$store
                        .dispatch('addEvent', eventAdded)
                        .then((res) => {
                            if (res.status === 200) {
                                this.$store.commit('SUCCESS_EVENT_ADDED', true);
                                this.$store.commit(
                                    'ADD_EVENT_TO_STORE',
                                    eventAdded
                                );
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            this.commit('FAILURE_EVENT_ADDING', true);
                        });
                }
                this.$refs.meetupForm.reset();
            }
        },
        fixDate(date) {
            return date.substr(3, 2) + '.' + date.substr(0, 2) + date.slice(5);
        },
        createIsoDate(date) {
            return new Date(this.fixDate(date)).toISOString();
        },
    },
});
</script>
