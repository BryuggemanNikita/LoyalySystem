import { Card } from "./Cards";

export class DescountCards{
    private descontCards:Card[] = [];
    
    constructor(){};

    public pushNewCard(card:Card){
        this.descontCards.push(card);
        this.descontCards.sort((e1, e2) => e1.getPercent() - e2.getPercent())
    };

    public getDescountCards():Card[]{
        return this.descontCards;
    };
};