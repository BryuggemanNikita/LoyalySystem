"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashRegister = void 0;
var CashRegister = /** @class */ (function () {
    function CashRegister() {
    }
    CashRegister.buy = function (user, shop) {
        var userIndexInSys = shop.getIndexUserInShop(user);
        var userCostBasket = shop.getShopSystem().getUsersBasketInShop()[userIndexInSys].getBasket().getCostBasket();
        var userDescount = shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].getDescount();
        var costBasketAfterDescount = userCostBasket - userCostBasket * (userDescount / 100);
        var bronzeCard = shop.getDescount().getCards().getBronzeCard();
        var silverCard = shop.getDescount().getCards().getSilverCard();
        var goldCard = shop.getDescount().getCards().getGoldCard();
        console.log("\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u044B \u0434\u043E \u0441\u043A\u0438\u0434\u043A\u0438: ".concat(userCostBasket, " \u0440\u0443\u0431\u043B\u0435\u0439\n\u0421\u043A\u0438\u0434\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430: ").concat(userDescount, "%\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u044B \u043F\u043E\u0441\u043B\u0435 \u0441\u043A\u0438\u0434\u043A\u0438: ").concat(costBasketAfterDescount, " \u0440\u0443\u0431\u043B\u0435\u0439"));
        if (userCostBasket > 5000 && userDescount !== shop.getDescount().getCards().getGoldCard()) {
            if (userDescount === bronzeCard) {
                shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].setDescount(silverCard);
                console.log("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u0412\u0430\u0448\u0430 \u0441\u043A\u0438\u0434\u043E\u0447\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0431\u044B\u043B\u0430 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0430 \u0434\u043E \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u043D\u043E\u0439");
            }
            else if (userDescount === silverCard) {
                shop.getShopSystem().getUserLoyaltyInShop()[userIndexInSys].setDescount(goldCard);
                console.log("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C! \u0412\u0430\u0448\u0430 \u0441\u043A\u0438\u0434\u043E\u0447\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0431\u044B\u043B\u0430 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0430 \u0434\u043E \u0437\u043E\u043B\u043E\u0442\u043E\u0439");
            }
            ;
        }
        else {
            console.log("\n\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u0440\u0437\u0438\u043D\u044B ".concat(userCostBasket, " \u0440\u0443\u0431\u043B\u0435\u0439, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C \u043D\u0430 ").concat(5000 - userCostBasket, " \u0440\u0443\u0431\u043B\u0435\u0439, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043A\u0438\u0434\u043E\u0447\u043D\u0443\u044E \u043A\u0430\u0440\u0442\u0443 \u0441 \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0441\u043A\u0438\u0434\u043A\u043E\u0439"));
        }
        ;
        console.log("Спасибо за покупку! Возвращайтесь ещё");
    };
    ;
    return CashRegister;
}());
exports.CashRegister = CashRegister;
