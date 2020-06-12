export class Cart{
    idProduct:number;
    name: string;
    price: number;
    quantity: number;


    constructor(){
        this.idProduct = 0;
        this.name = "";
        this.price = 0;
        this.quantity = 0;
    }
}