// Primitive

// 7 types: String, Number, Boolean, Null, undefined, symbol, BigInt


// const score=100
// const scoeValue=100.3
// const isLogged = false
// const outsideTem =null
// let userEmail;

// Reference (Non Primitive)

// Array, Objects, Functions


// const hero =["shaktiman","naagraj","doga"]
//  let myObject ={
//     name:"raushan",
//     age:23
// }

// const myFunction = function(){
//     console.log("hello world")
// }

// console.log(typeof BigInt)



// +++++++++++++++++++++++++++++++++++++

// stack(Primitive):- give copy value 
// Heap(Non-primitive):- reference

let myYoutubename ="raushankumartcom"

let anothername = myYoutubename

anothername="avinash@gmail.com"

console.log(myYoutubename);

console.log(anothername);

let user ={
    email : "user@google.com",
    upi:"user@ybl"
}


let userTwo = user

userTwo.email = "raushan@gmail.com"

console.log(user.email)

console.log(userTwo.email)