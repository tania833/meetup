<template>
    <div id="app">
        <nav class="app-nav">
            <router-link to="/main-page">Go to Main Page</router-link>
            <router-link to="/about-us-page">Go to About Us Page</router-link>
        </nav>
        <p>{{ count }}</p>
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from './router';
export default Vue.extend({
    name: 'app',
    router,
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
});
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    max-width: 500px;
}
.app-nav {
    display: flex;
    justify-content: space-between;
}
</style>
