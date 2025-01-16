export interface QuoteItemInterface {
    id: number;
    quoteId: number;
    materialId: number;
    height: number;
    width: number;
    quantity: number;
    adhesive: boolean;
    text: string;
}

export class QuoteItem implements QuoteItemInterface {
    id: number = 0;
    quoteId: number = 0;
    materialId: number = 0;
    height: number = 0;
    width: number = 0;
    quantity: number = 0;
    adhesive: boolean = false;
    text: string = "";
}