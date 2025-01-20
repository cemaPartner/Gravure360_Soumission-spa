export interface QuoteInterface {
    id?: number;
    name: string;
    description: string;
    date: Date;
    userId: number;
}

export class Quote implements QuoteInterface {
    id?: number = 0;
    name: string = "";
    description: string = "";
    date: Date = new Date();
    userId: number = 0;
    constructor() { }
}