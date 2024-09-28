console.log("block scope");

var x=2;
console.log(x) // var is global scope, let and const is block scope;


// shadowing

function shadowing(){
    let a = "hello";

    if(true){
        let a = "hi";
        console.log(a)
    }
    console.log(a)
}
shadowing()

// illegal shadowing 
// in this shadowing if the first variable is declared by let and later on it is declared by global scope(var) than it is illegal shadowing ;
// function illegalShadowing(){
//     let x = "xyz";
//     if(true){
//         var x ="hi";
//         console.log(x)
//     }
//     console.log(x)
// }
// illegalShadowing()


// Hoisting 

//JavaScript Hoisting refers to the process whereby the interpreter appears to move the 
// declaration of functions, variables, classes, or imports to the top of their scope,
// prior to execution of the code.

console.log(b); // gives undefined


console.log(a); // gives undefined
var b = 5;
var a =9;


// in case of var it is hoisted at top gives undefined but in let and const gives Cannot access 'a' before initialization.

function hoisting(){
    console.log("a",a);  // gives undefined
    console.log("b",b);  // gives Cannot access 'b' before initialization
    console.log("c",c);  // gives Cannot access 'c' before initialization

    const c = 20;
    let b=15;
    var a= 10;
}
hoisting()