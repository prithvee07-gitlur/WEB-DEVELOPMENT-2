// // function handleClick(){
// //     document.getElementById("btn").
// //     textContent="Clicked"
// }

// function handleClick(){
//     let heading = document.getElementById("heading");
//     heading.style.color = "tomato";
//     heading.textContent = "New Heading";
//     document.getElementById("btn").
//     textContent="ho gaya"
// }

// function handleClick(){
//     // Updating the span text
//     let span = document.getElementById("span");
//     span.textContent = "This is a span tag";

//     // Creating a new image element
//     const img = document.createElement("img");

//     // Setting the image attributes correctly
//     img.setAttribute("src", "./wallhaven-yq5vdk_1920x1080.png");
//     img.setAttribute("alt", "JUNJI ITO");

//     // Appending the image after the button
//     document.getElementById("btn").after(img);

// }

function handleClick() {
const spanEle=document. createElement("span").
textContent = "This is span element";

const image = document. createElement("img");

image.setAttribute("src", "./wallhaven-yq5vdk_1920x1080.png");

image.setAttribute("alt", "JUNJI ITO") ;

document.getElementById("content").append(spanEle);
document.getElementById("content") .append(image);
}