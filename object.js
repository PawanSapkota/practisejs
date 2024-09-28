console.log("object");

let a= 10;
let b = 20;

const data = (a,b)=>{
    return {a,b};
}
console.log(data(a,b));

const user ={
    name:"Pawan",
    age:20,
    "Are you fine": true
}
console.log(user["Are you fine"])


// dhynamically adding values

const property =" First Name";
const name = "Pawan Sapkota";

const user2 ={
    [property]:name
}
console.log(user2)


// looping for objects

for (key in user){
    console.log(user[key]) // this give the value of property
}

for (key in user){
    console.log(key)  // the give the property name
}

const value ={
    a:"one",
    b:"two",
    a:"three"
}
console.log(value)  // last value overwrite the first value



// Create a function multiplyByTwo(object) that multiplies all the numeric value by 2
const object ={
    a:100,
    b:200,
    c:"hello"
}

const multiplyByTwo =(object)=>{
    for( key in object){
        if(typeof object[key] === "number"){
             object[key] *= 2
        }
    }
}

multiplyByTwo(object)
console.log(object)

// Object can be create by 
// Using new Object(): This method creates an object using the Object constructor, 
// though it's less commonly used than object literal notation
const person = new Object();
person.name = "Pawan";
person.age = 20;
person.education = "Bachelor"

console.log("person",person)


// object can be create by Using: Object.create()
// This method allows you to create a new object based on a prototype.
const person2Detail ={
    greet:function(){
        console.log("My name is "+ this.name)
    }
}
const person2 = Object.create(person2Detail)
console.log("hereperson2",person2)
person2.name = "Rahul";
person2.age = 22;
person2.profession = "Programmer"
person2['greet']  // this is referencing to the greet function

console.log("person2",person2)
person2.greet();  


// Here is core concept on the above program and Object.create()
//In JavaScript, objects can inherit properties and methods from other objects through prototypes.
// When you use Object.create(), it allows the new object (person2 in this case) to "inherit" 
// properties and methods from the object you pass as an argument (person2Detail). 
//This inheritance doesn't copy the properties or methods directly into the new object but allows
// access to them via the prototype chain.


// making object using constructor


function Person(name,age){
    this.name = name;
    this.age = age;   
}
Person.prototype.greet = function() {
    console.log("Hey, " + this.name);
};

const pawan = new Person("Pawan",22)
console.log(pawan )

console.log("Person Greet",pawan.greet())  // here i got undefined because :When calling pawan.greet() inside console.log("Person Greet", pawan.greet());, the method gets called, and the message "Hey, Pawan" is logged to the console. However, since greet() doesn't return any value, undefined is passed as the second argument to console.log(), which is why you see undefined in the output.
pawan.greet()


// Constructor function for Person Objects
function Persons(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person Objects
  const myFather = new Persons("John", "Doe", 50, "blue");
  const myMother = new Persons("Sally", "Rally", 48, "green");
  
 console.log("myFather",myFather);
 console.log("myMother",myMother)
  
  
  // Add a new Property
  Persons.prototype.nationality = "English";

console.log("myFather nationality:", myFather.nationality);  // Accesses prototype property
console.log("myMother nationality:", myMother.nationality);  // Accesses prototype property



