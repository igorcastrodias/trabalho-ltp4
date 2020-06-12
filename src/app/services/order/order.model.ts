import { Cart } from '../cart/cart.model';

export class Order{
    id: Number;
    cart : Cart[];
    firstName: String;
    lastName: String;
    phoneNumber: String;
    email: String;
    total: Number;
    date: String;

    constructor(init?: Partial<Order>) {
        Object.assign(this, init);
    }


}