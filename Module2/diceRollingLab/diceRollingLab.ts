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
  
interface ElementSet {
    'div': Element, 
    'valueDiv': Element
}
  
let elementSets : Array<ElementSet> = [];
let squareSizeNum: number = 50;
let squareSize: string = `${ squareSizeNum }px`;
let borderColor: string = "black";
let borderWidth: string = "5px";
let borderStyle: string = "solid";
let verticalAlign: string = "middle";
let textAlign: string = "center";
let display: string = "inline-block";
  
let rollButton: Element = document.createElement('button');
let listOfRolls: Array<DieRoller> = [];
rollButton.textContent = "Roll Dice";

for (let index: number = 0; index < 4; index++) {
    elementSets.push({
        'div': document.createElement('div'),
        'valueDiv': document.createElement('div')
    })
}
  
let getRandomIntInclusive: Function = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
(rollButton as HTMLElement).onclick = (event) => {
    listOfRolls.map((elem) => {
        elem.changeColor(getRandomIntInclusive(0, 4));
        elem.rollDice(getRandomIntInclusive(0, 5));
    })
}

elementSets.map( (elem, index) => {
    let rollDiceClass = new DieRoller(elem.div, elem.valueDiv); 

    listOfRolls.push(rollDiceClass);

    document.body.appendChild(elem.div);    
})

document.body.appendChild(rollButton);
//export default {};
