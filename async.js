console.log("async");


// callback
const result = (value,sum)=>{
    console.log(`Your number is : ${value}`)
    console.log(`The multiplication value is:${sum()}`)
}
const sum =()=>{
    let a= 5;
    let b= 6
    return a * b
}
result(3,sum)

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

function readTextFile(file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
        console.log("data",data)
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        callback(data);
    });
}

readTextFile('value.txt', content => {
    console.log(`list: ${content}`);
});

console.log("here")
const comparefiles =(fileA,fileB,callback)=>{
    readTextFile(fileA,contentA =>{
        readTextFile(fileB,contentB =>{
            console.log("contetA",contentA)
            console.log("contentB",contentB)
            callback(contentA == contentB)
        })
    })
}

comparefiles("fileA.txt","fileA.txt",isEqual=>{
    if(isEqual){
        console.log("files are identical")
    }else{
        console.log("files are different")
    }
})



// Promise
 
const promise1 = new Promise((resolve,reject)=>{
    reject("this is rejected")
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"this is resolved in 0.5s");
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,400,"this is 0.4s")
})

const promises = [promise1,promise2,promise3];

Promise.any(promises).then((value)=> {
    console.log("This is promise",value)
})

const promise4 = Promise.resolve(2);
const promise5 = 42;
const promise6 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"Done all")
})
Promise.all([promise4,promise5,promise6]).then((value)=>{
    console.log("all",value)
})