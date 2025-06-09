
// {} this is called scope 
let a =300
if(true){
let a = 10
const b =20 
// console.log("INNER",a);
 //var can also be used outside function , so we dont generally use var
}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "akshat"
    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "akshat"
    if (username === "akshat") {
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++ interesting +++++++++++++++

// console.log(addone(5));     // here it can be used before initialization

function addone(num){
    return num +1
}

addTwo(5)                    // here it cannot be used before initialization
const addTwo = function(num){
    return num+2
}
// console.log();


