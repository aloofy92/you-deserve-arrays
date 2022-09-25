const prompt = require(`prompt-sync`) ({signint: true});

let userArray = JSON.parse(prompt("Enter an array:"));

let characters = ["goofy", "minnie", "mickey", "max"];
let index = 0;

while(index < characters.length){
    console.log(`${index} - ${characters[index]}`);
    index++;
}