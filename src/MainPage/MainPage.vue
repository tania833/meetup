<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'MainPage',
    methods: {
        increment() {
            this.$store.commit('increment');
        },
    },
});
</script>
