/// <reference path="extendedNamespacesLab.ts" />

namespace ArrayUtilities {
    export function reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    }
    export function concatenateArray(
        array1: Array<number>, array2: Array<number>
    ) {
        return array1.concat(array2);
    }
}
