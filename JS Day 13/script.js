
// today we will solve the problem of callback hell using promises
// we make promises for future they are in three state
// three stages : reject , fulfil (reslove), hold(pending)
// constructor function : we use new keyword here 
// promises are constructor functions available in js system that is used to create promises

let myPromise = new Promise(()=>{}); 
// promise also need a callback function 
console.log(myPromise) // yahan promise ka state pending hAI
// promises are the smart organisation of callback functions (sir's define)

let mypromise = new Promise((res,rej)=>{
    res("Promise Resolved !") // dono resolved or rejected saath me nahi ho sakta
});
console.log(mypromise)

// let promise = new Promise((res,rej)=>{
//     rej("Promise Rejected !")   // this will give unhandled promise rejection 
// });
// console.log(promise)

let Prom=new Promise((res,rej)=>{  // this is the promise creation part - we will handle it further
    let data="this is data";
    if (data){
        res(data);
    }else{
        rej("error");
    }
})
console.log(Prom) // we will get the data in the form of promise object form - ise handle karna ana chaiye

// promise handling

// if promise get resolved than what you will do - we use .then keyword

let Promi=new Promise((res,rej)=>{  
    let data="this is data";
    if (data){
        res(data);
    }else{
        rej("error");
    }
})
console.log(Promi)
Promi.then((data)=>{
    console.log(data);  // isse promise  ke andar ka data mil raha hai 
},(error)=>{
    console.log(error)  // is part ke liye hum catch keyword use karte hai industry me aise use nahi karte 
    // (multiple then ke liye single catch is sufficeient)
}) // handling the promise using .then and isme 2 callback functions add kar sakte hai
// one for resolve and other for reject (we can interchange it but mostly good understanding ke liye we use this way)

// data milne ka matlab hota hai resolved
// reject check karne ke liye empty string lekar check kar lo

// .catch((err)=>{
//     console.log(err)
// });  // we will write this statement in place of else statement in the above code

// all these points are important for interviews


// we use fetch function to get the api from any external source 
// fetch function is a library function that returns promises this is calledd fetch API
// jsonplacholder.typecode website for fetch 

// we can use any backend service using fetch pehle xho use hota tha for same work

let resp=fetch("https://jsonplaceholder.typicode.com/todos/1");
 // fetch jo first time return karega vo response object in the form of promise
resp.then((robj)=>{
    console.log(robj);  // hame ek object milega jisko hum reponse object bolte hai
    // console.log(robj.json()); // bina .then ke execute karne per ek aur promise aa jayega jise hum .then se handle karnege
    robj.json().then((data)=>{
        console.log(data); // yeh bhi nested hai - callback hell wali situation la raha hai
    });
});  // robj=response object
console.log(resp);

// shorthand me we will write the code a follows
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((robje)=>{
    robje.json().then((data)=>{
        console.log(data);   // this is also like callback hell called promises hell - 
        // we will tackle with this to get rid of this problem
    });
})

// we will do parallel coding to tackle this problem see website for the code
// if we are dropping the {} then we can also drop the return keyword


fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(robje=>{
    return robje.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{ // single parameter ke case me paranthesis hata sakte hai per no parameter aur more than two parameter me lagana hoga
    // similarly we can remove {} and return keyword
    console.log(err);
})  // promise chaining is the solution of callbackhell that we will do here


// home work do netflix simulation in the form of promises using promise chaining

// see code from the website