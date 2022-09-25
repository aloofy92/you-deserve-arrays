const prompt = require(`prompt-sync`) ({signint: true});

let userArray = JSON.parse(prompt("Enter an array:"));

if(userArray.length >= 4){
    console.log(userArray[4]);
} else if (userArray.length >= 3){
    console.log(userArray[2]);
}else if (userArray.length >= 2){
    console.log(userArray[2]);
}else if (userArray.length >= 1){
    console.log(userArray[1]);
} else {
    console.log('error');
}