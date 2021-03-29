<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import EventCard from '../lib/eventCard/EventCard.vue';
import Modal from '../lib/modal/Modal.vue';
export default Vue.extend({
    name: 'MainPage',
    components: { EventCard, Modal },
    beforeMount() {
        this.$store.dispatch('getEvents');
    },
    computed: {
        allEvents() {
            return this.$store.state.events;
        },
        showModalSuccess() {
            return this.$store.state.successEventDeleted;
        },
        showModalFailure() {
            return this.$store.state.failureEventDeleted;
        },
    },
    methods: {
        closeSucess() {
            this.$store.commit('SUCCESS_EVENT_DELETE', false);
        },
        closeFailure() {
            this.$store.commit('FAILURE_EVENT_DELETE', false);
        },
    },
});
</script>

<style>
.mainPage-content {
    margin: 10px;
}
</style>
