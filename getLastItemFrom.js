const prompt = require(`prompt-sync`) ({signint: true});

let userArray = JSON.parse(prompt("Enter an array:"));

let names = ["Tom", "Bob", "Joey"];

let namesLength =  names.length; 

let lastIndex = namesLength - 1;
console.log(names[lastIndex]);
