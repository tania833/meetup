import { IModalProps } from '../../types/types';

export type ModalPropertiesType = {
    [key: string]: IModalProps;
};

export const MODAL_PROPERTIES: ModalPropertiesType = {
    SUCCESS_EVENT_ADD: {
        title: 'Success',
        subtitle: 'Event added!',
        color: '#32CD32',
    },
    SUCCESS_EVENT_DELETE: {
        title: 'Success',
        subtitle: 'Event deleted!',
        color: '#32CD32',
    },
    SUCCESS_EVENT_EDIT: {
        title: 'Success',
        subtitle: 'Event edited!',
        color: '#32CD32',
    },
    FAILURE_EVENT_ADD: {
        title: 'Failure while event adding',
        subtitle: 'Please, try again',
        color: 'red',
    },
    FAILURE_EVENT_DELETE: {
        title: 'Failure while event deleting',
        subtitle: 'Please, try again',
        color: 'red',
    },
    FAILURE_EVENT_EDIT: {
        title: 'Failure while vent editing',
        subtitle: 'Please, try again',
        color: 'red',
    },
    RESET: {
        title: '',
        subtitle: '',
        color: 'white'
    }
};
