const prompt = require(`prompt-sync`) ({signint: true});

let userArray = JSON.parse(prompt("Enter an array:"));

let names = ["Tom", "Bob", "Joey"];


let firstArrayItemInNames = names[0];
console.log(`The 1st item in my names array is ${firstArrayItemInNames}`);