// const tinderUser = new Object()  singleton object
const tinderUser = {}   // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullName:{
            firstName:"Akshat",
            lastName:"kembulkar"
        }
    }
}

console.log(regularUser.fullname.userfullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2} // dont use this , it give same array like problem , like object inside object
// const obj3 = Object.assign({},obj1,obj2,obj4)  // empty bracket is target and rest of objects are source , it is optional but used

const obj3 = {...obj1,...obj2} // 90% this is used , and is easy using spread 
console.log(obj3);

const users = [       // objects inside arrays
    {
        id : 1,
        email:"a@gmail.com"
    }
]

users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // very usefull , returns an array so loop can be applied
console.log(Object.values(tinderUser)); // very usefull , returns an array so loop can be applied
console.log(Object.entries(tinderUser)); // give array inside array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
