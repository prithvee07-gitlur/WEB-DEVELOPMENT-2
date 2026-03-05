// convert tommorrow's code into promises

// kisi bhi resource se data fetch karne ke liye in the form of promises we use fetch mostly http request
// ise data nikalne ke liye do time promise handle karne padenge

function getData(url){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>console.log(data));
}

getData("https://jsonplaceholder.typicode.com/todos/5")

// we made a function of fetch so we can use this same function different urls 
// in this way hame baar baar function ke andar wale statements nahi likhne padegi
// function baar baar call karke url pass karke ho jayega

// yahan per concept ata hai async and await ka

// async- we use to make a function async
// await- async ke andar agar promise ko handle karna hai toh we use await

// you can use await only inside the async function to always handle the promise
//  - yahan .then bhi chalega but better is await
// jahan per async nahi hai toh .then se we will handle the promise

// now we will make the above code async

async function getData1(url){
    // fetch(url)
    // .then(resp=>resp.json())
    // .then(data=>console.log(data));  
    let resp = await fetch(url);
    let data = await resp.json();  // await before the promise lagega
    // await is waiting for the promise to get resolved or rejected
    return data;
}
getData1("https://jsonplaceholder.typicode.com/todos/5").then(data=>console.log(data));

// function ke andar ka saara code sync me chalega ise liye hamne async keyword lagaya hai
// aur thread (line) block nahi hoga

// whenever you call async function what ever you will get in return ?
// we will get promises (data in the form of promises)

// open weather data aur accu weather gives data in the form of API
// next we have to make the weather forcast API in assignment
