"use strict";
exports.__esModule = true;
var Dice = /** @class */ (function () {
    function Dice(div, valueDiv) {
        this.div = div;
        this.valueDiv = valueDiv;
    }
    Dice.prototype.rollDice = function (value) {
        if (typeof (value) === "number") {
            return true;
        }
        this.div.textContent = value;
        return true;
    };
    return Dice;
}());
exports["default"] = Dice;
