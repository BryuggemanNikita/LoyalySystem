"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescountCards = void 0;
var DescountCards = /** @class */ (function () {
    function DescountCards(bronzeCards, silverCards, goldCards) {
        this.bronzeCards = 0;
        this.silverCards = 0;
        this.goldCards = 0;
        this.bronzeCards = bronzeCards;
        this.silverCards = silverCards;
        this.goldCards = goldCards;
    }
    ;
    DescountCards.prototype.getBronzeCard = function () {
        return this.bronzeCards;
    };
    ;
    DescountCards.prototype.getSilverCard = function () {
        return this.silverCards;
    };
    ;
    DescountCards.prototype.getGoldCard = function () {
        return this.goldCards;
    };
    ;
    return DescountCards;
}());
exports.DescountCards = DescountCards;
