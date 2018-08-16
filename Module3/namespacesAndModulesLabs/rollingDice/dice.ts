class Dice {
    div: Element;
    valueDiv: Element;
    constructor(div: Element, valueDiv: Element){
        this.div = div;
        this.valueDiv = valueDiv;
    }  
    rollDice(value: number | string) : boolean {
        if (typeof(value) === "number") {
            return true;
        }
        (this.div as HTMLElement).textContent = value;
        return true;
    }
}

export default Dice;