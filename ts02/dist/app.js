"use strict";
console.log("ozi");
//? classes --------------------------------------------
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
let emp1 = new Employee(1, 'Mark');
// let emp2 = new Employee('1', 'Mark')
//? Inheritance ---------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee2 extends Person {
    constructor(emplyCode, name) {
        super(name);
        this.emplyCode = emplyCode;
    }
    display() {
        console.log(` Name: ${this.name}  - code ${this.emplyCode}`);
    }
}
const empl1 = new Employee2(2113, 'Yasin');
const per1 = new Person('Feyza');
//? Abstract class -------------------------------------
class Vehicle {
    constructor(year, color) {
        this.year = year;
        this.color = color;
    }
    startEngine() {
        console.log(`Engine Started`);
    }
}
class Car extends Vehicle {
    constructor(year, color, model, numOfDoors) {
        super(year, color);
        this.model = model;
        this.numOfDoors = numOfDoors;
    }
    stopEngine() {
        console.log(' Car stopped !');
    }
}
const car = new Car(1984, 'blue', 'bmw', 4);
//? Data modifiers - Private ------------------------
// hiçbir şekilde dışarıdan ve child'dan erişilemez
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
    setAge(newAge) {
        if (newAge > 0 && newAge <= 100) {
            this.age = newAge;
        }
        else {
            throw new Error('Invalid Age');
        }
    }
}
const Barry = new Person2('Barry', 25);
Barry.getAge();
Barry.setAge(26);
Barry.getAge();
//? protected -----------------------------------------
// privet'ın bir alt gizlilik durumu
// child erişir ama dışarıdan erişilemez
//? read-only -----------------------------------------
// ilk değeri değiştirilemez
//? static -------------------------------------------
class Circle {
    static calcArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
console.log(Circle.pi);
console.log(Circle.calcArea(5));
class LMSCalender {
    constructor(events) {
        this.events = events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const cohort13 = new LMSCalender(['HTML', 'CSS', 'JS']);
console.log(cohort13);
cohort13.addEvents('Typescript');
console.log(cohort13);
const red = { color: { r: 255, g: 0, b: 0 } };
let shape1 = { area: 255 };
class Square {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
}
const sq = new Square({ r: 0, g: 0, b: 100 }, 255);
console.log(sq);
function add(n1, n2) {
    return n1 + n2;
}
function conC(n1, n2) {
    return n1 + n2;
}
let arithemticAdd = add;
console.log(arithemticAdd(2, 5));
// console.log(arithemticAdd(2,"ozi"));
// let conCt:Sum = conC
//? generics ----------------------------------------------
//? Problem & Solution ------------------------------------
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['john', 'Mike', 'Alan']);
const myData = { data: 35 };
const myData2 = { data: '35' };
const myData3 = { data: null };
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let kvp = new KeyValuePair(1, 'a');
let shorter = new KeyValuePair('a', 1);
function displayType(p1, p2) {
    console.log(`p1: ${typeof (p1)},p2: ${typeof (p2)}`);
}
displayType(console.log, 5 > 8); //p1: function,p2: boolean
let product1 = { id: 3, name: 'three', price: 500 };
let product2 = { id: 3 };
let product3 = { id: 3, name: 'three', price: 500 };
let product4 = { id: 3, price: 500 };
let product5 = { id: 3, price: 500 };
