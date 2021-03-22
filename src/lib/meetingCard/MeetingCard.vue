<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'meeting-card',
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

<style>
.meeting-card {
    margin: 10px;
}
</style>
