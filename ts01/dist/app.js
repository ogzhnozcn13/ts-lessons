const button = document.getElementById('submit');
const a = document.getElementById('input1');
const b = document.getElementById('input2');
const result = document.getElementById('result');
function add(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    result.innerText = `${add(+a.value, +b.value)}`;
    console.log(add(+a.value, +b.value));
});
let xyz = 5;
let aa;
aa = 5;
aa = "aaaa";
let ab = "ppp";
ab = "xxx";
const arr = [1, 2, 3, "aa"];
arr.push("bb");
// let arr2: number[] = [12,23,435,"aa"]
//? tuples-----------------------------------------
let mytup;
mytup = [2, "aa"];
// mytup = ["ee", 2]
// mytup = [3, "ww", 9]
const ozi = 123;
const ww = "asasas";
//? enum -------------------------------------------
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
})(Role || (Role = {}));
let curentUser = Role.User;
console.log(curentUser);
//? enum -------------------------------------------
var tshirt;
(function (tshirt) {
    tshirt["small"] = "s";
    tshirt["medium"] = "m";
    tshirt["large"] = "l";
    tshirt[tshirt["xl"] = 51] = "xl";
    tshirt[tshirt["xxl"] = 52] = "xxl";
    tshirt[tshirt["xxxl"] = 53] = "xxxl";
})(tshirt || (tshirt = {}));
console.log(tshirt.medium);
console.log(tshirt.xxxl);
//? unknown -----------------------------------------
let notSure = 4;
notSure = "hhhh";
notSure = 100;
// let numVar: number = notSure
//? void --------------------------------------------
function abcd(n1, n2) {
    console.log(n1 + n2);
}
// let res : number =abcd(2,7)
//? never --------------------------------------------
// function error(message: string): never{
//     throw new Error(message);
// }
// error("new error")
//? union -------------------------------------------
let uVar = 0;
uVar = "aaa";
uVar = 23;
function fonk(n1, n2) { }
//String Literals
// type car = 'BMW' | 'Audi'
// let car1: car = 'BMW' 
// let car2: car = 'Audi' 
// let car3: car = 'Mercedes' 
//? intersection ----------------------------------------------
const employee = {
    name: "ozi",
    id: 1
};
let obj1 = {
    book_id: 1234,
    book_name: "Lord of the Rings",
    Author_Id: 1892,
    Author_name: "J. R. R. Tolkien",
};
//? type assortions -------------------------------------------
let score = "350";
// console.log(score.split(''));
console.log(score.split(''));
console.log(score);
console.log(score);
//? functions -------------------------------------------------
function selamla(greet, name) {
    if (!name)
        name = 'user';
    return `${greet + ' ' + name}`;
}
selamla('Merhaba', 'sercan');
selamla('Merhaba');
function addd(a, b) {
    return a + b;
}
console.log(addd('Hello', "Mark"));
console.log(addd(4, 2));
// console.log(addd(4, 'string'))
//? Rest Parameters --------------------------------------------
function abcde(num, ...numbers) {
    let total = num;
    numbers.forEach(number => total += number);
    console.log(total);
}
abcde(1, 2);
abcde(1, 2, 3, 4);
abcde(100, 200, 3, 5, 6, 7, 8, 9);
abcde(1);
