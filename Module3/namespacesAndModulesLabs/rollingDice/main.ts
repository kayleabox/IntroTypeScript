import DieRoller from './diceRoller.js'

interface ElementSet {
    'div': Element, 
    'valueDiv': Element
}
  
let elementSets : Array<ElementSet> = [];  
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
  
(rollButton as HTMLElement).onclick = (event: any) => {
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