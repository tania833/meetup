<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'AboutUsPage',
    methods: {
        decrement() {
            this.$store.commit('decrement');
        },
    },
});
</script>
