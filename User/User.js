"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        var resName = name.trim();
        if (resName !== "") {
            this.name = name;
        }
        else {
            throw new Error(User.ERROR);
        }
        ;
        User.ID++;
        this.userId = User.ID;
    }
    ;
    User.prototype.getName = function () {
        return this.name;
    };
    ;
    User.prototype.getUserId = function () {
        return this.userId;
    };
    ;
    User.ERROR = "Имя пустое";
    User.ID = 0;
    return User;
}());
exports.User = User;
;
