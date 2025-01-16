export interface ColorInterface {
    id?: number;
    nameFr: string;
    nameEn: string;
    texture?: string;
    hex: string;
}

export class Color implements ColorInterface {
    id?: number = 0
    nameFr: string = "";
    nameEn: string = "";
    texture?: string = "";
    hex: string = "";

    constructor( nameFr: string, nameEn: string, hex: string, texture?: string) {
        this.nameFr = nameFr;
        this.nameEn = nameEn;
        this.texture = texture;
        this.hex = hex;
      }
}