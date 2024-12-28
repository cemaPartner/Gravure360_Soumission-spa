export interface MaterialInterface {
    name: string;
    brand: string;
    backgroundColor: string;
    engravingColor: string;
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
    backgroundColor: string = '';
    engravingColor: string = '';
    width: number = 0;
    height: number = 0;
    thickness: number = 0;
    price: number = 0;
    stock: number = 0;
    adhesive: boolean = false;
    constructor() { }
}