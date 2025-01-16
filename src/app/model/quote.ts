export interface QuoteInterface {
    id: number;
    nome: string;
    description: string;
    date: Date;
    userId: number;
}

export class Quote implements QuoteInterface {
    id: number = 0;
    nome: string = "";
    description: string = "";
    date: Date = new Date();
    userId: number = 0;
    constructor() { }
}