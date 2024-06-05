// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Avinav Choudhary",
    [mySym] : "MyKey1",
    age: 18,
    location: "Delhi",
    email: "Avinav@google.com",
    isLoggedIn : false,
    lastLoginDays:["monday", "Saturday"]

}

//  console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Avinav@chatgpt.com"
//  Object.freeze(JsUser)

JsUser.email = "Avinav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this["full name"]}`);
    console.log(`Hello Js User , ${this.location}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

