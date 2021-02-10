<template src='./template.html'></template>

<script lang="ts">
import Vue from 'vue'
import {store} from '../store/index'
export default Vue.extend({
    name: 'MainPage',
    store,
    methods: {
        increment () {
            store.commit('increment')
        }
    }
})
</script>
