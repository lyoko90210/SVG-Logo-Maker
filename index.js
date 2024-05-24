const inquirer = require ("inquirer")
const fs = require ("fs")
const {Circle, Square, Triangle} = require("./lib/shapes")


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
    //console.log(Response)
    let newShape;

    if(Response.shape === "square"){
        newShape = new Square(Reponse.shapeColor)
    }
    else if(Response.shape === "circle"){
        newShape =  new Circle(Response.shapeColor)
    }
    // others

    let newSvg = `
 <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
 ${newShape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${Response.textColor}">${Response.text}</text>
 
</svg>`

fs.writeFileSync("newLogo.svg", newSvg )
console.log("New Logo Created.")
 }) 
}

init()