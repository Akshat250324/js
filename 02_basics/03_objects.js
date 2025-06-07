// singleton -constructor se singleton banta hai

// object literals
// Object.create - another method to create object (Constructor method)

const mySym = Symbol("key1") // declaration of symbol

const JsUser = {
    name:"Akshat",
    "full name":"akshat kembulkar",
    age:18,
    [mySym] : "mykey1",  // declaring symbol in object
    location:"Maharashtra",
    email:"akshat@google.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // accesing symbol from ibject
// console.log(typeof JsUser.mySym);
  
JsUser.email = "akshat.chatgpt.com" // to change value
// Object.freeze(JsUser)
JsUser.email = "Akshat#microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS User ${this.name}`);
    
}
console.log(JsUser.greeting());


