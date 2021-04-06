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
        showModalSuccessEdit() {
            return this.$store.state.successEventEdit;
        },
        showModalFailureEdit() {
            return this.$store.state.failureEventEdit;
        },
    },
    methods: {
        closeSucess() {
            this.$store.commit('SUCCESS_EVENT_ADDED', false);
            this.$router.push('/');
        },
        closeFailure() {
            this.$store.commit('FAILURE_EVENT_ADDED', false);
            this.$router.push('/');
        },
        closeSucessEdit() {
            this.$store.commit('SUCCESS_EVENT_EDIT', false);
            this.$router.push('/');
        },
        closeFailureEdit() {
            this.$store.commit('FAILURE_EVENT_EDIT', false);
            this.$router.push('/');
        },
    },
});
</script>
