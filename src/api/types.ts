export type EventResponseType = {
    name: string;
    email: string;
    date: string;
    isoDate: string;
    location: string;
    attendees: number;
    id: number;
};

export type DateFilters = {
    from: string;
    to: string;
};

export type EventRequestType = {
    name: string;
    email: string;
    date: string;
    isoDate: string;
    location: string;
    attendees: number;
    id: number;
};
