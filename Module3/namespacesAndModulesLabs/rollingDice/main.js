"use strict";
exports.__esModule = true;
var diceRoller_js_1 = require("./diceRoller.js");
var elementSets = [];
var rollButton = document.createElement('button');
var listOfRolls = [];
rollButton.textContent = "Roll Dice";
for (var index = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'valueDiv': document.createElement('div')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
rollButton.onclick = function (event) {
    listOfRolls.map(function (elem) {
        elem.changeColor(getRandomIntInclusive(0, 4));
        elem.rollDice(getRandomIntInclusive(0, 5));
    });
};
elementSets.map(function (elem, index) {
    var rollDiceClass = new diceRoller_js_1["default"](elem.div, elem.valueDiv);
    listOfRolls.push(rollDiceClass);
    document.body.appendChild(elem.div);
});
document.body.appendChild(rollButton);
