<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'date-picker',
    data: () => ({
        dates: [],
    }),
    methods: {
        setDates(value) {
            let eventDates = [];
            let sortedDates = [];
            let readyForReqDates = {
                from: '',
                to: '',
            };

            if (value.length > 0) {
                eventDates[0] = new Date(value[0]).toISOString();
                if (value[1]) {
                    eventDates[1] = new Date(value[1]).toISOString();
                } else {
                    eventDates[1] = new Date(new Date(value[0]).setDate(new Date(value[0]).getDate() + 1)).toISOString();
                }
                sortedDates = eventDates.sort();
                readyForReqDates = {
                    from: sortedDates[0],
                    to: sortedDates[1],
                };
            } else {
                this.dates = [];
            }

            this.$store.commit('SET_FILTER_DATES', readyForReqDates);
        },
    },
});
</script>

<style>
.v-application--wrap {
    margin: 10px;
    min-height: 0 !important;
}
.clear-filter-btn {
    margin: 10px auto 0;
    width: 150px;
}
</style>
