<template>
    <div id="app">
        <div>
            <img
                class="app-logo"
                src="https://secure.meetupstatic.com/s/img/286374644891845767035/logo/meetup-logo-script-1200x630.png"
                alt="logo"
            />
        </div>
        <app-navigation />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from './router';
import Vuetify from 'vuetify/lib';
import AppNavigation from './lib/navigation/AppNavigation.vue';
export default Vue.extend({
    components: { AppNavigation },
    name: 'app',
    router,
    vuetify: new Vuetify(),
    created() {
        this.$store.dispatch('getMeetings');
    },
});
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    max-width: 500px;
}
.app-nav {
    display: flex;
    justify-content: space-between;
}
a {
    text-decoration: none;
    color: inherit;
}
.app-logo {
    width: 100px;
}
</style>
