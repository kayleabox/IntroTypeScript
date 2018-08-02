class SomeClass {
  someNumber: number = 6;
  protected someElement: Element;
  private someThingPrivate: number = 13;
  constructor(param: Element){
    this.someElement = param;
  }
  someMethod = () => {
    this.someNumber = 5;
  }
  
  get GetMethod(){
    return this.someNumber;
  }

  set SetMethod(param) {
    this.someNumber = param;
  }
}

class ExtendedClass extends SomeClass {
  constructor(param: Element) {
    super(param);
  }

  someOtherMethod = (number: number, element: Element) => {
    this.someNumber = number;
    this.someElement = element;
    //can't do this because it is private
    //this.someThingPrivate;
  }
}

let thisElement = document.createElement('div');
let instanceOfExtendedClass = new ExtendedClass(thisElement);

instanceOfExtendedClass.someNumber;

let valueOfMethod = instanceOfExtendedClass.someOtherMethod(4, thisElement);

let newInstance = new SomeClass(thisElement);