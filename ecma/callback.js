console.log("callback");

const callback = (name,messageFn)=>{
    setTimeout(()=>{
      messageFn(name)
    },0)
}

const log =(message)=>{
    console.log(message)
}
callback("This is settimeout",log);
console.log("THis is test");