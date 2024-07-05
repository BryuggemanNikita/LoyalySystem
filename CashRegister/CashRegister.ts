import {User} from "../User/User";
import {Shop} from "../Shop/Shop";

export class CashRegister{
    private static STRING: string = "\n------------------------------------------------";
    public static buy(user:User, shop:Shop):void{
        let userIndexInSys:number = shop.getIndexUserInShop(user);
        let userCostBasket:number = shop.getShopSystem().getUsersBasketInShop()[userIndexInSys].getBasket().getCostBasket();
        let userDescount:number = shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getDescount();
        let costBasketAfterDescount:number = userCostBasket - userCostBasket *(userDescount/100)
        let lengthDescCards: number = shop.getDescount().getCards().getDescountCards().length - 1;
        let descountIndUser: number = shop.getDescount().getCards().getDescountCards().map(e => e.getPercent()).indexOf(shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getDescount())
        let nextDescountInd: number = descountIndUser + 1;
        let nameCard: string = shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getName();
        let nameNextCard: string = shop.getDescount().getCards().getDescountCards()[nextDescountInd].getName();


        console.log(`\nСтоимость корзины до скидки: ${userCostBasket} рублей\nСкидка клиента: ${userDescount}%\nСтоимость корзины после скидки: ${costBasketAfterDescount} рублей`)

        if (lengthDescCards === descountIndUser) {
            console.log("\nСпасибо за покупку! Возвращайтесь ещё");
        } else {
            console.log(`\nУ вас ${nameCard} карта, вы можете приобрести карту уровня ${nameNextCard}`)
        };
        console.log(CashRegister.STRING);
    };
}