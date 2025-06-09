const user = {
    username : 'akshat',
    price :999,
    welcomeMessge : function(){
        console.log(`${this.username},welcome to website`);
console.log(this);
        
    }
     
}
// user.welcomeMessge()
// user.username = "sam"
// user.welcomeMessge()

// console.log(this);

 
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // this is not possible directly in function , it can be only used when in object
    
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username); 
// }
// chai()



// ===============arrow function ===========

// const chai = () => {
//     let username = "akshat"
//     console.log(username);
//     console.log(this);
// }

// chai()

// const addTwo=(num1,num2) => {    syntax of arrow function
//     return num1+num2
// }

// const addTwo=(num1,num2) => num1+num2    another syntax of arrow function called impicit return


// const addTwo=(num1,num2) =>(num1+num2) another syntax


// const addTwo=(num1,num2) =>({username : "akshat"})


// if curly braces are used then return keyword is must , and when parenthesis is used return keyword is not needed
// console.log(addTwo(3,4));


