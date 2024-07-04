export class UserLoyaltyInShop{
    private id:number;
    private descount:number;
    constructor(id:number, discount:number){
        this.id = id;
        this.descount = discount;
    };

    public setDescount(value:number){
        this.descount = value;
    };

    public getDescount():number{
        return this.descount;
    };

    public getId():number{
        return this.id;
    };
};