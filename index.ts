#! /usr/bin/env node

import inquirer from "inquirer";

// 1)   computer will generate the random number
// 2)   user Input for gussing number
// 3)   compare user input with computer generate number and show result

const randomNumber = Math.floor(Math.random()*6 + 1 )


const answer = await inquirer.prompt([
    {
    name : "userGuss",
     type : "number",
      message : " please enter any number",

}

])

if (answer.userGuss === randomNumber ){
console.log("Congtruatlion you guss right number");
}
else {
    console.log("you gusses wrong number");
}

console.log(answer)