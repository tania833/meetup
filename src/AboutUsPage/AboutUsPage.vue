<template src='./template.html'></template>

<script lang="ts">
import Vue from 'vue'
import {store} from '../store/index'
export default Vue.extend({
    name: 'AboutUsPage',
    store,
    methods: {
       decrement () {
    	store.commit('decrement')
    }
    }
})
</script>