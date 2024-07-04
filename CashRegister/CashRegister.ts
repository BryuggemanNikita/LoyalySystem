import {User} from "../User/User";
import {Shop} from "../Shop/Shop";

export class CashRegister{
    public static buy(user:User, shop:Shop):void{
        let userIndexInSys:number = shop.getIndexUserInShop(user);
        let userCostBasket:number = shop.getShopSystem().getUsersBasketInShop()[userIndexInSys].getBasket().getCostBasket();
        let userDescount:number = shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getDescount();
        let costBasketAfterDescount:number = userCostBasket - userCostBasket *(userDescount/100)
        let bronzeCard = shop.getDescount().getCards().getBronzeCard();
        let silverCard = shop.getDescount().getCards().getSilverCard();
        let goldCard = shop.getDescount().getCards().getGoldCard();

        console.log(`\nСтоимость корзины до скидки: ${userCostBasket} рублей\nСкидка клиента: ${userDescount}%\nСтоимость корзины после скидки: ${costBasketAfterDescount} рублей`)

        if (userCostBasket > 5000 && userDescount !== shop.getDescount().getCards().getGoldCard()){
            if(userDescount === bronzeCard){
                shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].setDescount(silverCard);
                console.log(`Поздравляем! Ваша скидочная карта была улучшена до серебрянной`);
            }else if(userDescount === silverCard){
                shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].setDescount(goldCard);
                console.log(`Поздравляем! Ваша скидочная карта была улучшена до золотой`);
            };
        }else{
            console.log(`\nСтоимость вашей корзины ${userCostBasket} рублей, у вас есть возможность докупить на ${5000 - userCostBasket} рублей, чтобы получить скидочную карту с большей скидкой`)
        };
        console.log("Спасибо за покупку! Возвращайтесь ещё");
    };
}