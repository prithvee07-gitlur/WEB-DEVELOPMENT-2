// Q1. 

// let arr = [1,2,3,4,5]
// let reverse = []

// while(arr.length > 0){
//    reverse.push(arr.pop())
// }
// console.log(reverse);

// Q2. 
// let arr = [5,-7,12,-6,-13,15,2]
// let posInt=[]

// while(arr.length>0){
//     let val = arr.shift();
//     if(val>0){
//         posInt.push(val);
//     }
// }
// console.log(posInt);

function palindrome() {
    let arr = [1, 2, 3, 2, 1]
    let original = []
    let reverse = []

    //push given array elements into original array
    for (let i = 0; i < arr.length; i++) {
        original.push(arr[i])
    }
    //reverse the given array
    while (arr.length > 0) {
        reverse.push(arr.pop())
    }
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== reverse[i]) {
            return "not a palindrome";
        }
    }
    return "palindrome";
}
console.log(palindrome())

