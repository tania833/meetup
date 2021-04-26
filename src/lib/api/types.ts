export interface IEventResponseType {
    name: string,
    email: string,
    date: string,
    isoDate: string,
    location: string,
    attendees: number,
    id: number,
}

export type DateFilters = {
    from: string,
    to: string
}