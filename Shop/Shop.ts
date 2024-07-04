import {User} from "../User/User";
import {ShopSystem} from "./ShopSystem";
import {Descount} from "../Loyalty/Descount";


export class Shop{
    private name:string;
    private descount:Descount;

    private shopSystem:ShopSystem = new ShopSystem();

    constructor(name:string, descount:Descount){
        this.name = name;
        this.descount = descount;
    };

    public getIndexUserInShop(user:User):number{
        let indexUserInSys = this.shopSystem.getUsersBasketInShop().map(e => e.id).indexOf(user.getUserId());
        return indexUserInSys;
    };

    public getShopSystem():ShopSystem{
        return this.shopSystem
    };

    public getName():string{
        return this.name;
    };

    public getDescount():Descount{
        return this.descount;
    };

    public setName(value:string):void{
        this.name = value;
    };
};