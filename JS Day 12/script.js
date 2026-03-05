// ab tak hamne syncronous js me coding kari hai
// now we will do asyncronous coding 
// js behaviour is single threaded means ek he process chal sakta hai ek time per - means ek tiket counter jaisa hai 

// problems of single threaded : (could be blocking)
// time consuming - if some process is taking longer than usual than you have to wait
// aise type of code ko blocking nature of code bolte hai because of its single threaded nature

// line me ho friend paise le kar aa raha hai toh hum line se bhar aa jayenge taki line na block ho aur uske ane per dubara
//  thread(line) me aa jayenge - asyncronous style or non blocking nature

// by asyncrounous we can make this code non blocking nature

// why we need asyncronous type of coding ? (interview)
// due to js single threaded nature or blocking nature

// we have to converting the code to asyncronous : (methods)
// by async keyword
// using some functions of js that are asyncronous

console.log("Start .....")
function myfunction(){
    console.log("Hello,world !")
}
myfunction()
console.log("End .....")

// we are converting the above code to asyncronous code
console.log("Start .....")
function myfunction(){
    setTimeout(()=>{
    console.log("Hello,world !")
    },5000);
}
myfunction()
console.log("End .....")

// setime out me kuch samay ke liye code wala part kahin aur chale jata hai aur fir function me wapis a jata hai

// js me mostly we will write the non - blocking code 99 %

// iske saath bhi problem hai (set time out)

// most of the function return a value and here we a consoling the value
console.log("Start .....")
function myfunction(){
    setTimeout(()=>{
    return ("Hello,world !")
    },5000);
}
console.log(myfunction())  // iska output undefined aayega because yeh line 5 sec se pehle execute ho rahi hai 
// iska solution hai callback function
// async coding me isleye return statement work nahi karta hai
console.log("End .....")

// now we will use a callback function
console.log("Start .....")
function myfunction(callback){
    setTimeout(()=>{
    // return ("Hello,world !")
    callback("Hello,world !"); // calling the callback function -
    //  passing it and calling it back that is why we call the callback function by this name
    },5000);
}
console.log(myfunction((data)=>{  // here myfunction is a higher order function
    console.log(data)
}))
console.log("End .....")

// visualize this by callstack '


// simultaneous dependent call - login->video list->play one video (in netflix app)

// we will create login,getvideolst,single video in async fashion


// login function
console.log("Start .....")
function login(uname,password,cb){
    setTimeout(()=>{
    cb({uname:uname,isloggedin:true,message:"Login success !"}); 
    },1000);
}
// video list function
function getvideolst(email,cb){
    setTimeout(() => {
        cb([{title:"Video1"},{title:"Video2"}])
    }, 2000);
}
// single video
function getVideoDetail(video,cb){
    setTimeout(() => {
        cb({title:video.title,description:"This is a video"+video.title})
    }, 3000);
}
login("john@gmail.com","pass123",(userdata)=>{
    console.log(userdata);
    getvideolst(userdata.uname,(videolst)=>{
        console.log(videolst);
        getVideoDetail(videolst[0],(videoDetail)=>{
            console.log(videoDetail);
        });
    });
});  // isme nesting three calls (multiple dependent calls) hai toh implementation easy hai
// jyada calls per like 20 or more call will become highly unmaintainable and this is called a callback
//  hell(pyramid of dom-kyunki pyramid shape ban raha hai) 
// promise chaining is the solution of the call back hell
// what are promises ?? we should know this first.
console.log("End .....")

// callback-hell ???

