export enum ModalStateTypeEnum {
    SUCCESS_EVENT_ADD = 'SUCCESS_EVENT_ADD',
    SUCCESS_EVENT_DELETE = 'SUCCESS_EVENT_DELETE',
    SUCCESS_EVENT_EDIT = 'SUCCESS_EVENT_EDIT',
    FAILURE_EVENT_ADD = 'FAILURE_EVENT_ADD',
    FAILURE_EVENT_DELETE = 'FAILURE_EVENT_DELETE',
    FAILURE_EVENT_EDIT = 'FAILURE_EVENT_EDIT',
}

export interface IEvent {
    name: string;
    email: string;
    date: string;
    isoDate: string;
    location: string;
    attendees: number;
    id: number;
}

export interface IDateFilter {
    from: string;
    to: string;
}

export interface IModalState {
    modalStateType: ModalStateTypeEnum;
    showModal: boolean;
}

export interface IModalProps {
    title: string;
    subtitle: string;
    color: string;
}
