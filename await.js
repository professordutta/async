console.log('Hello');
const message = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('Programming is good');
    },2000);
});

async function fetch_data()
{
    const result = await message;
    console.log(result);
    console.log('NodeJs is the best programmming language');
}
fetch_data();