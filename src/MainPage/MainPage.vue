<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import MeetingCard from '../lib/meetingCard/MeetingCard.vue';
export default Vue.extend({
    name: 'MainPage',
    components: { MeetingCard },
    computed: {
        fetchedAllMeetings() {
            return this.$store.getters.allMeetings;
        },
    },
});
</script>

<style>
.mainPage-content{
    margin: 10px;
}
</style>
