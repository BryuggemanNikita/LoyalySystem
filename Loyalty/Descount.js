"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descount = void 0;
var Descount = /** @class */ (function () {
    function Descount(name, typeCards) {
        this.name = name;
        this.typeCards = typeCards;
    }
    ;
    Descount.prototype.getCards = function () {
        return this.typeCards;
    };
    ;
    Descount.prototype.getName = function () {
        return this.name;
    };
    ;
    return Descount;
}());
exports.Descount = Descount;
;
