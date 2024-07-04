"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBasketInShop = void 0;
var UserBasketInShop = /** @class */ (function () {
    function UserBasketInShop(id, basket) {
        this.id = id;
        this.basket = basket;
    }
    ;
    UserBasketInShop.prototype.getId = function () {
        return this.id;
    };
    ;
    UserBasketInShop.prototype.getBasket = function () {
        return this.basket;
    };
    ;
    return UserBasketInShop;
}());
exports.UserBasketInShop = UserBasketInShop;
;
