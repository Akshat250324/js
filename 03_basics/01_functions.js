// function sayMyName() {
//     console.log("A");
//     console.log("K");
//     console.log("S");
// }

// sayMyName  //This is function reference
// sayMyName()  // This is function execution

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)



function addTwoNumbers(num1,num2){
    let result = num1+num2
    return result
    // console.log("akshat"); REsult k baad kuch bhi print nahi hota 
    
}
const result = addTwoNumbers(3,5)
// console.log("Result : ",result);


function loginUserMessage(username = "sam"){  // default values
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("akshat"));
// console.log(loginUserMessage());


function calculateCartPrice(...num){ //rest operator
    return num
}

// console.log(calculateCartPrice(200,400,500));

function calculateCartPrice(val1,val2,...num){
    return num
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username:"akshat",
    price:"100"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray = [200,400,300,600]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([233,256,64,645]));

