import Dice from './dice.js'

enum RollValues {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}

enum Colors {
    White,
    Red,
    Blue,
    Green,
    Orange
}

let squareSizeNum: number = 50;
let squareSize: string = `${ squareSizeNum }px`;
let borderColor: string = "black";
let borderWidth: string = "5px";
let borderStyle: string = "solid";
let verticalAlign: string = "middle";
let textAlign: string = "center";
let display: string = "inline-block";

class DieRoller extends Dice {
    static RollValues = RollValues;
    static Colors = Colors;
    constructor(div: Element, valueDiv: Element) {
        super(div, valueDiv);
        (this.div as HTMLElement).style.width = squareSize;
        (this.div as HTMLElement).style.height = squareSize;
        (this.div as HTMLElement).style.borderColor = borderColor;
        (this.div as HTMLElement).style.borderWidth = borderWidth;
        (this.div as HTMLElement).style.borderStyle = borderStyle;
        (this.div as HTMLElement).style.verticalAlign = verticalAlign;
        (this.div as HTMLElement).style.display = display;
        (this.div as HTMLElement).style.margin = "10px";
        (this.valueDiv as HTMLElement).style.textAlign = textAlign;
        (this.valueDiv as HTMLElement).style.marginTop = "30%";        
        (this.div as HTMLElement).appendChild(this.valueDiv);
    }
    rollDice(value: number) : boolean{
        (this.valueDiv as HTMLElement).textContent = RollValues[value];
        return true;
    }
    changeColor(color: number) : boolean{
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}

export default DieRoller;
