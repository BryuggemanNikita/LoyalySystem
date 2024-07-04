import {BasketOfProduct} from "../Products/BasketOfProduct";

export class UserBasketInShop{
    id:number;
    basket:BasketOfProduct;
    constructor(id:number, basket:BasketOfProduct){
        this.id = id;
        this.basket = basket;
    };

    public getId():number{
        return this.id;
    };

    public getBasket():BasketOfProduct{
        return this.basket;
    };
};