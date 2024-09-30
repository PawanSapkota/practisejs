console.log("objectqn");

const a = {};
const b = {key : "b"}
const c = {key : "c"}

a[b]= 123;
a[c] = 234;

console.log(a[b])
console.log(a)


// what is JSON stringify and parse 

const user ={
    name:"Pawan Sapkota",
    age : 22
}
const string = JSON.stringify(user);
console.log(string)

// localStorage.setItem("test",string)

// console.log(JSON.parse(string));

// where can we mostly use in stringyfy? Common use case for storing it in a local storage



const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);  

const map = new Map();      // Create a new Map
const bs = {y: "b"};         // Object b with property y
const cs = {y: "c"};         // Object c with property y

map.set(bs, 123);            // Assign value 123 with object b as the key
map.set(cs, 234); 
console.log("bs",bs)           // Assign value 234 with object c as the key

console.log(map.get(bs));    // Access the value associated with key b (outputs 123)
console.log(map.get(cs));  