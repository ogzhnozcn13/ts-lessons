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

//? tuples:
let mytup: [number, string];
mytup = [2, "aa"];
// mytup = ["ee", 2]
// mytup = [3, "ww", 9]
