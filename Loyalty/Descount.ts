import {DescountCards} from "./DecountCards";

export class Descount{
    name:string;
    private typeCards:DescountCards;

    constructor(name:string, typeCards:DescountCards){
        this.name = name;
        this.typeCards = typeCards;
    };

    public getCards():DescountCards{
        return this.typeCards;
    };

    public getName():string{
        return this.name;
    };
};