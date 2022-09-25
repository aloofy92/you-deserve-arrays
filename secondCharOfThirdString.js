const prompt = require(`prompt-sync`) ({signint: true});

let userArray = JSON.parse(prompt("Enter an array:"));

let str = "Tonight is going to be a good night";

//let secondCharofThirdStr = str[12];
//console.log(str[12])

if(typeof userArray[2][1] === "string"){
    console.log(userArray[2][1]);
} else {
    console.log("Error");
}