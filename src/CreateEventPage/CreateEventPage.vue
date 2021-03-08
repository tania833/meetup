<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import AppInputForm from '../lib/inputForm/AppInputForm.vue';

export default Vue.extend({
    components: { AppInputForm },
    name: 'CreateEventPage',
});
</script>
