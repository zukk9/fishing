export interface Numbers {
    [x: string]: any;
    id: number,
    number: string,
    name: string,
    completed: boolean,
    privilege: boolean,
    dateFrom?: string,
    dateTo?: string
}