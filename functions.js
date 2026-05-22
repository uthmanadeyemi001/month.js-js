// a function is a reusable block of code that a specific task when you call it

//1. normal /classic function

function greet() {
    console.log("hello everyone");

    
}
greet();

// 2. function expression
const greetWell = function () {
    console.log("omo,hello");
    
}

greetWell();

// 3.arrow function

const hello = () => {
    console.log("hello.this is arrow");

    
}
hello()

// 4. anonymous function

setTimeout(function () {
    console.log("done");
    
}, 3000);


// 5.IIFE imediately invoked function expression
(function (params) {
    console.log("instantly");
    
})()


// DOM - document object model
function logName() {
  console.log("my name is uthman");
  
      
}

let div = document.getElementById("myDiv")
let secondDiv = document.getElementById("secondDiv")
div.innerText = "hello,this is my js text"
secondDiv.innerHTML = "<h1>  hello,this is innerhtml </h1>"

let myInput =document.getElementById("myInput")
console.log(myInput.value);



console.log(div)

let output = document.getElementById("output")
function show() {
  let  myInput=document.getElementById("myInput").value
   if (myInput == "") {
     alert("please input")
   } else {
    output.innerText = myInput
   }

    
    
}