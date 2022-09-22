const prompt = require('prompt-sync')
({signit: true})

let userNum = Number(prompt('Enter a number:  '));

while(userNum <= 100){
    userNum * 2
    console.log(userNum);
};

console.log(userNum);



