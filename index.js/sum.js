//let keyword to create 2 variables num1 & num 2
//funtion-regular and arrow=? sum
//pass values with variations & array (spread keyword)

let num1 =19;
let num2=88;

function sum(a,b)
{
    return a+b;
}
//arrow function
let sum1=(a,b)=>a+b;
//arrow function
let sub=(a,b)=>a-b;

const mul=(a,b)=>a*b;


console.log(sum1(num1,num2))
//spread keyword
console.log(sum(...[3,0]))
console.log(sub(...[3,0]))
console.log(mul(...[3,0]))
