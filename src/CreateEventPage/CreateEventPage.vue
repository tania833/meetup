<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import AppInputForm from '../lib/inputForm/AppInputForm.vue';
import Modal from '../lib/modal/Modal.vue';

export default Vue.extend({
    components: { AppInputForm, Modal },
    name: 'CreateEventPage',
    computed: {
        showModalSuccess() {
            return this.$store.state.successEventAdded;
        },
        showModalFailure() {
            return this.$store.state.failureEventAdding;
        },
    },
    methods: {
        closeSucess() {
            this.$store.commit('SUCCESS_EVENT_ADDED', false);
        },
        closeFailure() {
            this.$store.commit('FAILURE_EVENT_ADDED', false);
        },
    },
});
</script>
