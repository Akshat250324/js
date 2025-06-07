// # Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt.

const score = false
// JS is dynamically typed
// Reference (Non primitive)

//Array, Objects, Functions

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 23438432868232n

const heros = ["shaktiman","naagraaj","doga"]
let myobj = {
    name:"Akshat",
    age:18,
}

const myfunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp );

console.log(typeof score);
console.log(typeof myfunction);
console.log(typeof heros);

console.log(typeof anotherId);


// typeof undefined returns "undefined".
// typeof 0 returns "number".
// typeof 10n returns "bigint".
// typeof true returns "boolean".
// typeof "foo" returns "string".
// typeof Symbol("id") returns "symbol".
// typeof Math returns "object" (this is due to a known issue in JavaScript).
// typeof null returns "object" (another known issue in JavaScript).
// typeof alert returns "function".


// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// MEMORY -stack and heap
// Stack(Used in primirive types) , Heap(non-primitive)

let myYoutubename = "akshatkembulkar.com"

let anotherName = myYoutubename
anotherName = "AK"
console.log(anotherName);

console.log(myYoutubename);

// Because here a copy is made and value is changed in the copy not in real one

let user = {
    email:"user@123",
    upi: "user@ybl",
}

let userTwo = user

userTwo.email = "akshat@google.com"

console.log(user.email);
console.log(userTwo.email);

// In non-primitive datatypes the value is stored in heap instead of stack , and no copy file is created , the changes are made directly  in the original file