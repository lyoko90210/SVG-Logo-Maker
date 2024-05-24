const inquirer = require ("inquirer")
const fs = require ("fs")
const {Circle,Square,Triangle} = require("./lib/shapes")


const questions = [ 
    {   name:"shape",
        type: "list",
        message:"what is your shape?",
        choices:["circle","square","triangle"],
    },

    {
        name: "shapeColor",
        type: "input",
        message:"what color would you like the shape?",

    },
   
    {
        name: "text",
        type: "input",
        message:"what text would you like in your shape?",

    },

    {
        name: "textColor",
        type: "input",
        message:"what text color would you like in your shape?",

    },
]


function init (){
 inquirer.prompt(questions)
 .then(Response =>{
    console.log(Response)



 }) 
}

init()