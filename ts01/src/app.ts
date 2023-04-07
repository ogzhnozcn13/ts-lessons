const button = document.getElementById('submit')!;
const a = document.getElementById('input1')! as HTMLInputElement;
const b = document.getElementById('input2')! as HTMLInputElement;
const result = document.getElementById('result')!;


function add(a :number, b :number) {
    return a + b;
}

button.addEventListener('click', () => {
    result.innerText = `${add(+a.value, +b.value)}`;
    console.log(add(+a.value, +b.value));
});

let xyz : number = 5;

let aa;
aa=5;
aa="aaaa"

let ab = "ppp"
ab="xxx"

const arr = [1,2,3,"aa"]
arr.push("bb")

// let arr2: number[] = [12,23,435,"aa"]

//? tuples-----------------------------------------

let mytup: [number, string];
mytup = [2, "aa"];
// mytup = ["ee", 2]
// mytup = [3, "ww", 9]

const ozi = 123;

const ww = "asasas";



//? enum -------------------------------------------

enum Role {
    User,
    Admin
}

let curentUser: Role = Role.User
console.log(curentUser);

const enum Role2 {
    User,
    Admin
}


//? enum -------------------------------------------

enum tshirt {
    small = "s",
    medium = "m",
    large = "l",
    xl = 51,
    xxl,
    xxxl
}

console.log(tshirt.medium);
console.log(tshirt.xxxl);



//? unknown -----------------------------------------

let notSure: unknown = 4;
notSure = "hhhh"
notSure =100

// let numVar: number = notSure



//? void --------------------------------------------

function abcd(n1:number, n2:number): void {
    console.log(n1+n2);
}
// let res : number =abcd(2,7)



//? never --------------------------------------------

// function error(message: string): never{
//     throw new Error(message);
// }
// error("new error")

//? union -------------------------------------------

let uVar: string | number = 0
uVar = "aaa"
uVar = 23
// uVar = true
// uVar = {}

//?  type aliases -------------------------------------------

type nums = number | string

function fonk(n1: nums, n2:nums) {}

//String Literals

// type car = 'BMW' | 'Audi'

// let car1: car = 'BMW' 
// let car2: car = 'Audi' 
// let car3: car = 'Mercedes' 


//? intersection ----------------------------------------------

const employee : {
    name: string;
    id?:number
} = {
    name: "ozi",
    id: 1
    
}

type Book = {
    book_id: number;
    book_name: string;
  }
    
  type Author = {
    Author_Id: number;
    Author_name: string;
  }

  type intersected_type = Book & Author;

  let obj1: intersected_type = {
    book_id: 1234,
    book_name: "Lord of the Rings",
    Author_Id: 1892,
    Author_name: "J. R. R. Tolkien",
  };


//? type assortions -------------------------------------------

let score: unknown = "350";
// console.log(score.split(''));
console.log((<string>score).split(''));
console.log(score as string);
console.log(score as number);


//? functions -------------------------------------------------

function selamla (greet: string, name?:string ):string{
    if(!name) name = 'user'
    return `${greet + ' ' + name}`
}
selamla('Merhaba','sercan')
selamla('Merhaba')
// selamla('Merhaba','sercan', 'zamazingo')


//? function overloading --------------------------------------

function addd (a:string, b:string):string;
function addd (a:number, b:number):number;
function addd (a:any, b:any):any{
    return a+b
}
console.log(addd('Hello', "Mark"))
console.log(addd(4, 2))
// console.log(addd(4, 'string'))


//? Rest Parameters --------------------------------------------
function abcde(num: number, ...numbers:number[]){
    let total = num; 

    numbers.forEach(number=> total+= number)
    console.log(total);
}


abcde(1,2);
abcde(1,2,3,4)
abcde(100, 200, 3, 5, 6, 7, 8, 9)
abcde(1);
