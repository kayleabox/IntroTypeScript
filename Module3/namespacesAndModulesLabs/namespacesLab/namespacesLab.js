"use strict";
/// <reference path="extendedNamespacesLab.ts" />
var ArrayUtilities;
(function (ArrayUtilities) {
    function reverseArray(array) {
        return array.slice(0).reverse();
    }
    ArrayUtilities.reverseArray = reverseArray;
    function concatenateArray(array1, array2) {
        return array1.concat(array2);
    }
    ArrayUtilities.concatenateArray = concatenateArray;
})(ArrayUtilities || (ArrayUtilities = {}));
