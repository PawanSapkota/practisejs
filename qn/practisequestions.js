console.log("pracisequestions");

// make this olleh nawanp
const str = "Hello Pawan"

let x = str.split(" ").map((value)=>{
  return   value.split('').reverse().join("")
 
})
console.log(x)
console.log(x.join(" "))


// how  to check if an object is array or not
function checkArray(value){
    return Array.isArray(value)
}
console.log(checkArray([]));
console.log(checkArray({}));

// how to empty an array in js do not reset it in a new array  and donot loop through to pop each value
const array = [1,2,3,4,5];
const all = [...array]
console.log("all",all)
console.log(array.splice(0,all));


let a = 12.5

if(a%1 === 0){
    console.log("it is integer")
}
else {
    console.log("it is not integer")
}
