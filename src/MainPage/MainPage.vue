<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import EventCard from '../lib/eventCard/EventCard.vue';
import Modal from '../lib/modal/Modal.vue';
import DatePicker from '../lib/datePicker/DatePicker.vue';
export default Vue.extend({
    name: 'MainPage',
    components: { EventCard, Modal, DatePicker },
    data() {
        return {
            showFilters: false,
        };
    },
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
        dateFilters() {
            return this.$store.state.dates;
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
    watch: {
        dateFilters() {
            this.$store.dispatch('getEvents');
        },
    },
});
</script>

<style>
.mainPage-content {
    margin: 10px;
}
</style>
