const prompt = require('prompt-sync')({sigint:true});

let userInterface = Number(prompt("enter a number:  "));
let num1 = 0;
let num2 = 1;
let num3 = Number();
let i = 0

while (i < userInterface){
    if(i === 0){
        console.log(0);
    } else if (i === 1){
        console.log(i);
    } else{
        num3= num1 + num2;
        console.log(num1 + num2);
        num1 = num2;
        num2 = num3;
    }
}