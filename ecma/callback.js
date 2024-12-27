console.log("callback");

console.log("start");

const callback = (name,messageFn)=>{
    setTimeout(()=>{
      messageFn(name)
    },0)
}

const log =(message)=>{
    console.log(message)
}
callback("This is practise of callback",log);
console.log("stop");

const getUser =(id,callback)=>{
  setTimeout(()=>{
    console.log("user fetching");
    const user ={id:id,name:"Pawan"}
    callback(user);

  },2000)
}

const getPost = (id,callback)=>{
  setTimeout(()=>{
    console.log("Posts fetching for user:", id);
    const posts = [{ id: 1, post:"Post1" },{id:2 ,post:"Post2"}]
    callback(posts);
  },1500)
}


const getComments = (id,callback)=>{
  setTimeout(()=>{
    console.log("Get Comments:",id);
    const comments = [{id:1,comment:"This is good."},{id:2,comment:"This is best."}];
    callback(comments)

  },1000)
}


getUser(1,(user)=>{
  console.log(user,user.id, user.name)

  getPost(user.id,(posts)=>{
    console.log('Posts:', posts.map((value)=>"id:" +" " + value.id +" "+"post:" + " "+ value.post));

    getComments(posts[1].id,(comments)=>{
      console.log("Comments:",comments);
    })
  })
})