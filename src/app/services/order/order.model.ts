export class Order{
    idProduct:number;
    name: string;
    price: number;
    quantity: number;
    firstNam: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    total: number;


    constructor(){
        this.idProduct = 0;
        this.name = "";
        this.price = 0;
        this.quantity = 0;
        this.firstNam = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.total = 0;
    }
}