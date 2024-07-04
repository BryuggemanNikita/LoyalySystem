"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketOfProduct = void 0;
var BasketOfProduct = /** @class */ (function () {
    function BasketOfProduct() {
        this.basket = [];
        this.baskeotCost = 0;
    }
    BasketOfProduct.prototype.PushProductInBasket = function (product) {
        this.basket.push(product);
        console.log("\n\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0442\u043E\u0432\u0430\u0440: ".concat(product.getName(), ", \u0435\u0433\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ").concat(product.getCost(), " \u0440\u0435\u0431\u043B\u0435\u0439"));
        this.baskeotCost += product.getCost();
    };
    ;
    BasketOfProduct.prototype.popProductInBasket = function (ind) {
        var length = this.basket.length;
        var nameProduct = this.basket[ind].getName();
        var costProduct = this.basket[ind].getCost();
        if (ind >= 0 && ind < length) {
            this.basket.splice(ind, 1);
            console.log("\n\u0412\u044B \u0443\u0431\u0440\u0430\u043B\u0438 \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B ".concat(nameProduct, ", \u0415\u0433\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u043B\u0430: ").concat(costProduct));
            this.baskeotCost -= costProduct;
        }
        else {
            console.log(BasketOfProduct.ERROR);
        }
        ;
    };
    ;
    BasketOfProduct.prototype.getCostBasket = function () {
        return this.baskeotCost;
    };
    ;
    BasketOfProduct.prototype.getBasket = function () {
        return this.basket;
    };
    ;
    BasketOfProduct.ERROR = "Такого элемента в корзине нет!";
    return BasketOfProduct;
}());
exports.BasketOfProduct = BasketOfProduct;
;
