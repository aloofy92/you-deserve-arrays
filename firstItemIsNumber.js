
const prompt = require(`prompt-sync`) ({signint: true});




let userArray = JSON.parse(prompt("Enter an array:"));
let arrayType = false

if (typeof (userArray[0]) === "number"){
    arrayType = true;
}
console.log(`The first item in the array is ${userArray}`);
console.log(arrayType)
