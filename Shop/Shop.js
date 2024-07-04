"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var ShopSystem_1 = require("./ShopSystem");
var Shop = /** @class */ (function () {
    function Shop(name, descount) {
        this.shopSystem = new ShopSystem_1.ShopSystem();
        this.name = name;
        this.descount = descount;
    }
    ;
    Shop.prototype.getIndexUserInShop = function (user) {
        var indexUserInSys = this.shopSystem.getUsersBasketInShop().map(function (e) { return e.id; }).indexOf(user.getUserId());
        return indexUserInSys;
    };
    ;
    Shop.prototype.getShopSystem = function () {
        return this.shopSystem;
    };
    ;
    Shop.prototype.getName = function () {
        return this.name;
    };
    ;
    Shop.prototype.getDescount = function () {
        return this.descount;
    };
    ;
    Shop.prototype.setName = function (value) {
        this.name = value;
    };
    ;
    return Shop;
}());
exports.Shop = Shop;
;
