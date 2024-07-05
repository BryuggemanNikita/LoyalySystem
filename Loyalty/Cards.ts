export class Card{
    private name:string;
    private percent:number;

    constructor(name:string, percent:number){
        this.name = name;
        this.percent = percent;
    };

    public getName():string{
        return this.name;
    };

    public getPercent():number{
        return this.percent;
    };
};