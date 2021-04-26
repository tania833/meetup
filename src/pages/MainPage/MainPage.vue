<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import EventCard from '../../lib/eventCard/EventCard.vue';
import Modal from '../../lib/modal/Modal.vue';
import DatePicker from '../../lib/datePicker/DatePicker.vue';
export default Vue.extend({
    name: 'MainPage',
    components: { EventCard, DatePicker },
    data() {
        return {
            showFilters: false,
        };
    },
    beforeMount() {
        this.$store.dispatch('getEvents');
    },
    computed: {
        getAllEvents() {
            return this.$store.state.events;
        },
        getDateFilters() {
            return this.$store.state.dates;
        },
    },
    methods: {
        filterButtonClick() {
            this.showFilters = !this.showFilters;
            this.$store.commit('SET_FILTER_DATES', {
                from: '',
                to: '',
            });
        },
    },
    watch: {
        getDateFilters() {
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
