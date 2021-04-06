<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import { mdiDelete, mdiPencil } from '@mdi/js';
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
            icons: {
                mdiDelete,
                mdiPencil,
            },
        };
    },
    methods: {
        deleteEvent(id) {
            this.$store
                .dispatch('deleteEvent', id)
                .then((res) => {
                    if (res.status === 200) {
                        this.$store.commit('SUCCESS_EVENT_DELETE', true);
                        this.$store.commit('DELETE_EVENT_FROM_STORE', id);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.commit('FAILURE_EVENT_DELETE', true);
                });
        },
    },
});
</script>

<style>
.event-card {
    margin: 10px;
}
.event-card__icons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 112px;
}
</style>
