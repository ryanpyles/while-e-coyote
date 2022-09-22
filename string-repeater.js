const prompt = require('prompt-sync')({sigint:true});
  
let promptString = prompt('Enter a string:  ')
let repeatString = "";
  
  while(repeatString.length <= 10 ){
    repeatString = repeatString + promptString;
    console.log(repeatString);
  }
  

