// Primitive

// 7 types: String
        // Number
        // Boolean
        // null
        // undefined
        // Symbol
        // BigInt

        const score = 100
        const scoreValue = 100.3

        const isLoggedIn = false
        const outsideTemp = null
        let userEmail;


        const id = Symbol('123')
        const anotherId = Symbol('123')
        // console.log(id==anotherId);


        const bigNumber = 232435657568843n


    // Referencce (non Primitive)
    // Array , Objects, Functions

    const heros = ["shaktiman" , "naagraj" , "ironman"]
    let myObj = {
        nmae : "Shekhar",
        age : 22
    }

    const myfunction =function(){
        // console.log("Hello World!");
    }

    // console.log(typeof bigNumber);
    // console.log(typeof score);
    // console.log(typeof scoreValue);
    // console.log(typeof myfunction);
    // console.log(typeof myObj);
    // console.log(typeof heros);
    // console.log(typeof Symbol);

    // Memory

//  Stack ( Primitive)  
//  Heap ( Non Primitive)

let myYoutubename = "Shekharsinhadotcom"
let anothername = myYoutubename
 anothername= "shekharsinha.com"

console.log(anothername);
console.log(myYoutubename);

let userone={
    email: " Shekhar@google.com",
    upi: "user@ybl"
}



let userTwo = userone
userTwo.email= "user@google.com"
console.log(userTwo);
console.log(userone)
