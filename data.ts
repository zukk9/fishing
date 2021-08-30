import { Dialog, Numbers } from "./state";

export const numbers: Numbers[] = [
    {id: 1, number: 'CB-112', name: 'Іванов Іван', completed: false, privilege: true, dateFrom: '12-12-2021', dateTo: "15-12-2021", personal: false,
    location: ['town1']},
    {id: 2, number: 'ТB-123', name: 'test test test', completed: false, privilege: false, dateFrom: '12-12-2021', dateTo: "15-12-2021", personal: false,
    location: ['town2']},
    {id: 3, number: 'ИИ 321', name: 'Патон Борис', completed: false, privilege: false, dateFrom: '12-12-2021', dateTo: "15-12-2021", personal: false,
    location: ['town3']},
    {id: 4, number: ' КК34556 ', name: 'Сидоренко Светлана', completed: false, privilege: false, dateFrom: '12-12-2021', dateTo: "15-12-2021", personal: false,
    location: ['town4']}
];
export const dialog: Dialog[] = [
    {id: 1, question: 'question1', showQuestion: true, answer: true, isVoted: true},
    {id: 2, question: 'question2', showQuestion: false, answer: false, isVoted: false},
    {id: 3, question: 'question3', showQuestion: false, answer: true, isVoted: true}
]