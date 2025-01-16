export interface ColorInterface {
    id: number;
    nameFr: string;
    nameEn: string;
    hex: string;
}

export class Color implements ColorInterface {
    id: number = 0
    nameFr: string = "";
    nameEn: string = "";
    hex: string = "";
    constructor() { }
}