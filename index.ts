#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];

let conduction = true;
while(conduction){

   let addPerson = await inquirer.prompt([
    {
        type: "input",
        message:"add a person in your todos list?",
        name:"firstQuestion"
    },
    {
        type:"confirm",
        message:" can you add more person in your todos list?",
        name:"secondQuestion",
        default:true,
    
    }
]);

todos.push(addPerson.firstQuestion);
console.log(todos);
conduction = addPerson.secondQuestion;

};
