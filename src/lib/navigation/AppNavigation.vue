<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import router from '../../router/index';
import { mdiPlus, mdiViewDashboard } from '@mdi/js';
export default Vue.extend({
    name: 'app-navigation',
    router,
    vuetify: new Vuetify(),
    data() {
        return {
            items: [
                {
                    title: 'Home',
                    icon: mdiViewDashboard,
                    link: '/main-page',
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
