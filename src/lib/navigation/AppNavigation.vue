<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import router from '../../router/index';
import { mdiPlus, mdiViewDashboard } from '@mdi/js';
export default Vue.extend({
    name: 'app-navigation',
    router,
    data() {
        return {
            items: [
                {
                    title: 'Home',
                    icon: mdiViewDashboard,
                    link: '/',
                },
                {
                    title: 'New event',
                    icon: mdiPlus,
                    link: '/create-event-page',
                },
            ],
        };
    },
});
</script>
