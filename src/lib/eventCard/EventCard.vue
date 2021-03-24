<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'event-card',
    props: ['event'],
    data() {
        return {
            date: this.event.date,
            eventName: this.event.eventname,
            location: this.event.location,
            email: this.event.email,
            attendees: this.event.attendees,
            id: this.event.id,
        };
    },
});
</script>

<style>
.event-card {
    margin: 10px;
}
</style>
