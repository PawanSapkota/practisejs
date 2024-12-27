console.log("promise");

console.log("start");


const example = new Promise((resolve , reject)=>{
    const result = true;
    if(result) resolve("This is resolved");
    else reject("This is rejected");
})

example
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})


console.log("stop");