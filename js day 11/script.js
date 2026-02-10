// const textInput=document.getElementById("myInput");
// textInput.addEventListener("change", (event)=>
//     {
// // here event is targeting the entire
// // element object node and event.target is
// // targetting the particular element.
// event.preventDefault ()
// console.log(event.target.id) ;

// })

const form=document.getElementById("formInput")
const textInput=document.getElementById("myInput")
const courseInput=document.getElementById("course")
const output=document.getElementById("output")

form.addEventListener("submit", (event)=>{
event.preventDefault()
// to get the user input value
const name=textInput.value
const course=courseInput.value
console.log(name);

// to put the name and course value inside the output box
output.innerText=name+" "+course

})

