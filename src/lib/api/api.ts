import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './baseUrl';

import { IEventResponseType, DateFilters } from './types';

const instance = axios.create({
    baseURL: baseUrl,
});

export const getEvents = (
    dateFilters: DateFilters
): Promise<AxiosResponse<IEventResponseType>> => {
    return instance.get<IEventResponseType>(
        `/all-events/?from=${dateFilters.from}&to=${dateFilters.to}`
    );
};
