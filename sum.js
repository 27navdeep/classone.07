//let keyword to create 2 variables num1 & num 2
//funtion-regular and arrow=? sum
//pass values with variations & array (spread keyword)
console.log("running")
let num1 =19;
let num2=88;

function sum(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
//arrow function
(a=b)=>{
    return a=b;
}

console.log(sum(num1,num2))
//spread keyword
console.log(sum(...[3,0]))
console.log(sub(...[3,0]))
console.log(mul(...[3,0]))
