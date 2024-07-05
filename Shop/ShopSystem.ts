import {User} from "../User/User";
import {UserBasketInShop} from "./UserBasketInShop";
import {UserLoyaltyInShop} from "./UserLoyaltyInShop";
import {Product} from "../Products/Product";
import {BasketOfProduct} from "../Products/BasketOfProduct";

export class ShopSystem{
    private assortymentsOfProducts:Product[] = [];
    private arrUserBasketInShop:UserBasketInShop[] = [];
    private arrUserLoyaltyInShop:UserLoyaltyInShop[] = [];
    private static UNDCARD:string = "отуствует"
    constructor(){};

    public pushProductsInAssortiment(product:Product):void{
        this.assortymentsOfProducts.push(product);
    };

    public pushNewUserInShopSystem(user:User):void{
        this.arrUserBasketInShop.push(new UserBasketInShop(user.getUserId(), new BasketOfProduct()));
        this.arrUserLoyaltyInShop.push(new UserLoyaltyInShop(user.getUserId(), 0, ShopSystem.UNDCARD));
    };

    public pushProductInUserBasket(user:User, product:Product){
        let indexUserInSys = this.arrUserBasketInShop.map(e => e.id).indexOf(user.getUserId());
        let indexProductInSys = this.assortymentsOfProducts.map(e => e.getId()).indexOf(product.getId());
        if (indexProductInSys !== -1){
            this.arrUserBasketInShop[indexUserInSys].basket.PushProductInBasket(this.assortymentsOfProducts[indexProductInSys]);
            return;
        };
        console.log(`Товара "${product.getName()}" нет в ассортименте магазина`);
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