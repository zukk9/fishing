export interface Numbers {
    [x: string]: any;
    id: number,
    number: string,
    name: string,
    completed: boolean,
    privilege: boolean,
    dateFrom?: string,
    dateTo?: string,
    personal: boolean,
    location: string[]
}
export interface Dialog {
    id: number,
    question: string,
    showQuestion: boolean,
    answer: boolean,
    isVoted: boolean
}