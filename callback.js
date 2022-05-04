console.log("Hello")

function cb(text,callback){
    setTimeout(function(){
        console.log(text);
        callback()
    },2000);
    
}

cb("Programming is good",function callback(){
    console.log("NodeJs is the best programmming language")
})
