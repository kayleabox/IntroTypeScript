"use strict";
var ArrayUtilities;
(function (ArrayUtilities) {
    function lastItemOfArray(array) {
        return array.slice(0).pop();
    }
    ArrayUtilities.lastItemOfArray = lastItemOfArray;
    function firstItemOfArray(array) {
        return array.slice(0).shift();
    }
    ArrayUtilities.firstItemOfArray = firstItemOfArray;
})(ArrayUtilities || (ArrayUtilities = {}));
