function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("e");
    console.log("k");
    console.log("h");
    console.log("a");
    console.log("r");
    
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     // number1+number2
//     console.log(number1+number2)
// }

function addTwoNumber(number1, number2){
   let result = number1+number2
   return result
}

// addTwoNumber(23,45)
// addTwoNumber(3,"4")

const result = addTwoNumber(3, 5)
// console.log("result:", result);

function loginUserMessage(userName = "sam"){

    // if(userName === undefined){
    //     console.log("Please Enter the UserName");
    //     return
    // }
    // another Way to writing a above Code
    if(!userName){
        console.log("Please Enter the UserName");
        return
    }
      return `${userName} just logged in`
}

//  console.log(loginUserMessage("Shekhar"))
// console.log(loginUserMessage("Shekhar"));

// (...) this is called a rest operator
// function calculateCardPrice(...num1){
//         return num1
// }
function calculateCardPrice( val1 , val2,...num1){
        return num1
}

// console.log(calculateCardPrice(200, 400, 500 , 4000));

const user = {
    UserName : "Shekhar",
    price: 199
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.UserName} and Price is ${anyObject.price}`);
    
}

// handleObject(user)
// handleObject({
//     UserName: "sam",
//     price: 399
// })

const myNewArray = [200,500,600,700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 600, 800]));



