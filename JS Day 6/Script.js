let user={
    name:"Prithvee Singh Yadav",
    address:"Gwalior",
    Mobileno:95759443465,
    Favcolor:['black ','blue' ,'white']
}

console.log ("My name is "+user.name+" I live in "+user.address+" My mobile number is "+user.Mobileno+" My favourite colors are "+user.Favcolor[0]+", "+user.Favcolor[1]+" and "+user.Favcolor[2] )

console.log(`My name is ${user.name}. I live in ${user.address}. My mobile number is ${user.Mobileno}. My favourite colors are ${user.Favcolor[0]}, ${user.Favcolor[1]} and ${user.Favcolor[2]}.`);

//object 

const car = {
    brand: "Toyota",
    model: "FORTUNAR",
}

Object.freeze(car); //in Freese we cannot add a new key or value also cont change or update key or value

Object.seal(car); //in seal we cannot add a new key or value but we can change or update key or value

car.model = "Land Cruiser";
car.color = "black";
console.log(car.color);