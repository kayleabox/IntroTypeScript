"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var dice_js_1 = require("./dice.js");
var RollValues;
(function (RollValues) {
    RollValues[RollValues["One"] = 0] = "One";
    RollValues[RollValues["Two"] = 1] = "Two";
    RollValues[RollValues["Three"] = 2] = "Three";
    RollValues[RollValues["Four"] = 3] = "Four";
    RollValues[RollValues["Five"] = 4] = "Five";
    RollValues[RollValues["Six"] = 5] = "Six";
})(RollValues || (RollValues = {}));
var Colors;
(function (Colors) {
    Colors[Colors["White"] = 0] = "White";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Orange"] = 4] = "Orange";
})(Colors || (Colors = {}));
var squareSizeNum = 50;
var squareSize = squareSizeNum + "px";
var borderColor = "black";
var borderWidth = "5px";
var borderStyle = "solid";
var verticalAlign = "middle";
var textAlign = "center";
var display = "inline-block";
var DieRoller = /** @class */ (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(div, valueDiv) {
        var _this = _super.call(this, div, valueDiv) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        _this.div.style.borderColor = borderColor;
        _this.div.style.borderWidth = borderWidth;
        _this.div.style.borderStyle = borderStyle;
        _this.div.style.verticalAlign = verticalAlign;
        _this.div.style.display = display;
        _this.div.style.margin = "10px";
        _this.valueDiv.style.textAlign = textAlign;
        _this.valueDiv.style.marginTop = "30%";
        _this.div.appendChild(_this.valueDiv);
        return _this;
    }
    DieRoller.prototype.rollDice = function (value) {
        this.valueDiv.textContent = RollValues[value];
        return true;
    };
    DieRoller.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    DieRoller.RollValues = RollValues;
    DieRoller.Colors = Colors;
    return DieRoller;
}(dice_js_1["default"]));
exports["default"] = DieRoller;
