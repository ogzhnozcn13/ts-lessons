console.log("ozi");

//? classes --------------------------------------------

class Employee {
    empCode: number;
    empName: string;

    constructor (code:number, name:string){
        this.empCode = code;
        this.empName = name
    }
}
let emp1 = new Employee(1, 'Mark')
// let emp2 = new Employee('1', 'Mark')




//? Inheritance ---------------------------------------

class Person{
    name: string;
    constructor(name: string){
        this.name = name
    }
}

class Employee2 extends Person{
    emplyCode: number;

    constructor(emplyCode: number, name: string){
        super(name);
        this.emplyCode = emplyCode;
    }

    display():void{
        console.log(` Name: ${this.name}  - code ${this.emplyCode}`)
    }
}

const empl1 = new Employee2 (2113, 'Yasin')
const per1 = new Person('Feyza')




//? Abstract class -------------------------------------

abstract class Vehicle {

    year: number;
    color: string;
    constructor(year: number, color: string) {
      this.year = year;
      this.color = color;
    }
  
    startEngine(): void {
      console.log(`Engine Started`)
    }
  
    abstract stopEngine(): void;
  }

  class Car extends Vehicle {
  
    model: string;
    numOfDoors: number
    constructor(year: number, color: string, model: string, numOfDoors: number) {
      super(year, color);
      this.model = model;
      this.numOfDoors = numOfDoors
    }
  
    stopEngine(): void {
        console.log(' Car stopped !')
    }
  
  }
  const car = new Car(1984, 'blue', 'bmw', 4);



//? Data modifiers - Private ------------------------
// hiçbir şekilde dışarıdan ve child'dan erişilemez
  class Person2 {
      public name: string;
      private age: number;
      constructor(name: string, age: number){
          this.name = name;
          this.age = age;
      }
  
      getAge(){
          console.log(this.age)
      }
  
      setAge(newAge: number){
          if(newAge > 0 && newAge <=100){
              this.age = newAge
          }else{
              throw new Error('Invalid Age')
          }
      }
  
  }
  
  const Barry = new Person2('Barry',25)
  
  Barry.getAge()
  Barry.setAge(26)
  Barry.getAge()


//? protected -----------------------------------------
// privet'ın bir alt gizlilik durumu
// child erişir ama dışarıdan erişilemez



//? read-only -----------------------------------------
// ilk değeri değiştirilemez


//? static -------------------------------------------
class Circle {
    static pi: number = 3.14;
  
    static calcArea(radius:number) {
      return this.pi * radius * radius
    }
  }
  
console.log(Circle.pi)
console.log(Circle.calcArea(5))


//? interfaces ---------------------------------------
//ilave'ler yapabiliriz
interface Calender {
    events: string[];
    addEvents(event: string): void;
}

class LMSCalender implements Calender{
    constructor(public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event);
    }
}

const cohort13 = new LMSCalender(['HTML','CSS', 'JS'])
console.log(cohort13)

cohort13.addEvents('Typescript')
console.log(cohort13)



//? interface color ---------------------------------------------
interface Color {
    color: {r: number, g: number, b: number};
}

const red:Color = {color: {r: 255, g:0, b:0}}

interface Shape {
    area: number;
}

let shape1: Shape = {area:255}

class Square implements Color, Shape {
    constructor( public color: {r: number, g: number, b:number}, public area: number){
    }
}

const sq = new Square({r:0,g:0,b:100},255)
console.log(sq)



//? ınterfaces as s function -------------------------------------
interface Sum{
    (num1: number, num2: number): number;
}

function add(n1: number, n2: number): number{
    return n1+ n2;
}

function conC(n1: string, n2: string): string{
    return n1+n2;
}

let arithemticAdd:Sum = add;
console.log(arithemticAdd(2,5));
// console.log(arithemticAdd(2,"ozi"));

// let conCt:Sum = conC


//? generics ----------------------------------------------
//? Problem & Solution ------------------------------------

function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArr = getArray([1,2,3,4])
let strArr = getArray(['john', 'Mike', 'Alan'])
// strArr.push(3)  /* Error */
// numArr.push('Sally') /* Error */