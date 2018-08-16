namespace ArrayUtilities {
    export function lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }
    export function firstItemOfArray(array: Array<number>) {
        return array.slice(0).shift();
    }
}