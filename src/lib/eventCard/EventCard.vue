<template src="./template.html" />

<script lang="ts">
import Vue from 'vue';
import * as _ from 'lodash';
import { mdiDelete, mdiPencil } from '@mdi/js';
export default Vue.extend({
    name: 'event-card',
    props: ['event'],
    data() {
        return {
            ..._.pick(this.event, [
                'name',
                'email',
                'date',
                'isoDate',
                'location',
                'attendees',
                'id',
            ]),
            icons: {
                mdiDelete,
                mdiPencil,
            },
        };
    },
    methods: {
        deleteEvent(id) {
            this.$store
                .dispatch('deleteEvent', id)
                .then((res) => {
                    if (res.status === 200) {
                        this.$store.commit('SET_MODAL_STATE', {
                            modalStateType: 'SUCCESS_EVENT_DELETE',
                            showModal: true,
                        });
                        this.$store.commit('DELETE_EVENT_FROM_STORE', id);
                    }
                })
                .catch((err) => {
                    this.$store.commit('SET_MODAL_STATE', {
                        modalStateType: 'FAILURE_EVENT_DELETE',
                        showModal: true,
                    });
                    throw new Error(err);
                });
        },
    },
});
</script>

<style>
.event-card {
    margin: 10px;
}
.event-card__icons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 112px;
}
</style>
