// // // control flows

// // // if

// // // if(true){

// // // }

// // const isUserloggedIn = true 
// // const temperature = 41

// // if (temperature<50) {
// //     console.log("less than 50");
// // }
// // console.log("temperature is greater than 50");

// // if (temperature<50) {
// //     console.log("less than 50");
// // }else{
// // console.log("temperature is greater than 50");
// // }

// // if(2 == "2"){
// //     console.log("executed");
    
// // }
// // if(2 === "2"){   //strict checking also checks datatype
// //     console.log("executed");
    
// // }

// // // >, <, <=, >=, ==, !=, ===

// // const score = 200

// // if (score>100) {
// //     const power = "fly"
// //     console.log((`User power: ${power}`));
    
// // }
// // console.log((`User power: ${power}`));

// const balance = 1000

// if (balance>500) console.log("test");  // implicit scope where curly brackets are not used and is written in one line


// if (balance<500) {
//     console.log("less than");
// }else if (balance<750) {
//     console.log("less than 750");
// }else{
//     console.log("less than 1200 ");
    
// }


const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (isUserloggedIn && debitCard) {
//     console.log("Allow to buy courses ");
// }

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

