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

//? -------------------------------------------------