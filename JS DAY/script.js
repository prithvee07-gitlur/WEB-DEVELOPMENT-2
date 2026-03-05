// function pro(){
// return new Promise((res,rej)=>{
// setTimeout(()=>{
// res();
// },1000)
// })
// .then(()=>console.log("resolved"))
// }
// console.log(pro());

function pro(num){
 return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log(num);
        res();
    },1000)

})
}
pro(1)
.then(()=>pro(2))
.then(()=>pro(3))
.then(()=>pro(4))
.then(()=>pro(5))
.catch(()=>console.log("error")) 

//promise chaining: when we use multiple .then mathod to achieve the task or result.

//In callback hell we did the same task but the code is hard to read and understand.
