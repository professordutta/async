console.log('Hello');
const message = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('Programming is good');
    },2000);
});
message.then(result=>{
    console.log(result)
    console.log('NodeJs is the best programmming language');
});

