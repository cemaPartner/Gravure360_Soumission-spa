export interface MaterialInterface {
    name: string;
    brand: string;
    backgroundColor: number;
    engravingColor: number;
    width: number;
    height: number;
    thickness: number;
    price: number;
    stock: number;
    adhesive: boolean;
}

export class Material implements MaterialInterface {
    name: string = '';
    brand: string = '';
    backgroundColor: number = 0;
    engravingColor: number = 0;
    width: number = 0;
    height: number = 0;
    thickness: number = 0;
    price: number = 0;
    stock: number = 0;
    adhesive: boolean = false;
    constructor() { }
}