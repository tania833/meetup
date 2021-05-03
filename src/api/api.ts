import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './baseUrl';

import { EventResponseType, DateFilters, EventRequestType } from './types';

const instance = axios.create({
    baseURL: baseUrl,
});

export const getEventsApi = (
    dateFilters: DateFilters
): Promise<AxiosResponse<EventResponseType>> => {
    return instance.get<EventResponseType>(
        `/all-events/?from=${dateFilters.from}&to=${dateFilters.to}`
    );
};

export const addEventApi = (
    event: EventRequestType
): Promise<AxiosResponse<EventResponseType>> => {
    return instance.post(`/event-add`, event);
};

export const deleteEventApi = (
    eventId: number
): Promise<AxiosResponse<number>> => {
    return instance.post(`/event-delete`, {
        id: eventId,
    });
};

export const getEventByIdApi = (
    eventId: number
): Promise<AxiosResponse<EventResponseType>> => {
    return instance.get<EventResponseType>(
        `/event-find-by-id/?eventId=${eventId}`
    );
};

export const editEventApi = (
    event: EventRequestType
): Promise<AxiosResponse<EventResponseType>> => {
    return instance.post(`event-update`, event);
};
