export class DescountCards{
    private bronzeCards:number = 0;
    private silverCards:number = 0;
    private goldCards:number = 0;
    
    constructor(bronzeCards:number, silverCards:number, goldCards:number){
        this.bronzeCards = bronzeCards;
        this.silverCards = silverCards;
        this.goldCards = goldCards;
    };

    public getBronzeCard():number{
        return this.bronzeCards;
    };
    
    public getSilverCard():number{
        return this.silverCards;
    };
    
    public getGoldCard():number{
        return this.goldCards;
    };
}