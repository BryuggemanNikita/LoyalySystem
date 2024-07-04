"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoyaltyInShop = void 0;
var UserLoyaltyInShop = /** @class */ (function () {
    function UserLoyaltyInShop(id, discount) {
        this.id = id;
        this.descount = discount;
    }
    ;
    UserLoyaltyInShop.prototype.setDescount = function (value) {
        this.descount = value;
    };
    ;
    UserLoyaltyInShop.prototype.getDescount = function () {
        return this.descount;
    };
    ;
    UserLoyaltyInShop.prototype.getId = function () {
        return this.id;
    };
    ;
    return UserLoyaltyInShop;
}());
exports.UserLoyaltyInShop = UserLoyaltyInShop;
;
