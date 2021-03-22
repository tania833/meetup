<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'app-input-form',
    data: () => ({
        error: [],
        valid: false,
        eventName: '',
        nameRules: [(v) => !!v || 'Name is required'],
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        date: '',
        dateRules: [
            (v) => !!v || 'Date is required',
            (v) =>
                /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
                    v
                ) || 'Date must be valid',
        ],
        location: '',
        locationRules: [(v) => !!v || 'Location is required'],
        attendees: '',
        attendeesRules: [(v) => !!v || 'Attendees are required'],
    }),
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
                const meeting = {
                    eventname: this.eventName,
                    email: this.email,
                    date: this.date,
                    location: this.location,
                    attendees: this.attendees,
                };
                this.$store.dispatch('addMeeting', meeting);
                this.$refs.meetupForm.reset();
            }
        },
    },
});
</script>
