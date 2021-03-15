<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
export default Vue.extend({
    name: 'meeting-card',
    vuetify: new Vuetify(),
    props: ['meeting'],
    data() {
        return {
            date: this.meeting.date,
            eventName: this.meeting.eventname,
            location: this.meeting.location,
            email: this.meeting.email,
            attendees: this.meeting.attendees,
            id: this.meeting.id,
        };
    },
});
</script>
