<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import EventCard from '../lib/eventCard/EventCard.vue';
export default Vue.extend({
    name: 'MainPage',
    components: { EventCard },
    beforeMount() {
        this.$store.dispatch('getEvents');
    },
    computed: {
        allEvents() {
            return this.$store.state.events;
        },
    },
});
</script>

<style>
.mainPage-content {
    margin: 10px;
}
</style>
