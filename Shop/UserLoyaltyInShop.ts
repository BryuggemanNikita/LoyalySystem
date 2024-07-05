import { Card } from "../Loyalty/Cards";

export class UserLoyaltyInShop{
    private id:number;
    private descount:number;
    private name:string;
    constructor(id:number, discount:number, name:string){
        this.id = id;
        this.descount = discount;this.name = name;
    };

    public setDescount(card:Card){
        this.descount = card.getPercent();
        this.name = card.getName();
    };

    public getDescount():number{
        return this.descount;
    };

    public getName():string{
        return this.name;
    };

    public getId():number{
        return this.id;
    };
};