import {User} from "../User/User";
import {UserBasketInShop} from "./UserBasketInShop";
import {UserLoyaltyInShop} from "./UserLoyaltyInShop";
import {Product} from "../Products/Product";
import {BasketOfProduct} from "../Products/BasketOfProduct";

export class ShopSystem{
    private assortymentsOfProducts:Product[] = [];
    private arrUserBasketInShop:UserBasketInShop[] = [];
    private arrUserLoyaltyInShop:UserLoyaltyInShop[] = [];

    constructor(){};

    public pushProductsInAssortiment(product:Product):void{
        this.assortymentsOfProducts.push(product);
    };

    public pushNewUserInShopSystem(user:User):void{
        this.arrUserBasketInShop.push(new UserBasketInShop(user.getUserId(), new BasketOfProduct()));
        this.arrUserLoyaltyInShop.push(new UserLoyaltyInShop(user.getUserId(), 0));
    };

    public pushProductInUserBasket(user:User, ind:number){
        let indexUserInSys = this.arrUserBasketInShop.map(e => e.id).indexOf(user.getUserId());
        if(ind < 0 || ind >= this.assortymentsOfProducts.length){
            throw new Error();
        };
        this.arrUserBasketInShop[indexUserInSys].basket.PushProductInBasket(this.assortymentsOfProducts[ind]);
    };

    public getAssortyment():Product[]{
        return this.assortymentsOfProducts;
    };

    public getUsersBasketInShop():UserBasketInShop[]{
        return this.arrUserBasketInShop;
    };

    public getUserLoyaltyInShop():UserLoyaltyInShop[]{
        return this.arrUserLoyaltyInShop;
    };
};