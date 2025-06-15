// most of loops are arrays specific loops

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World !"
for (const greet of greeting) {
    // console.log(`Each char idd ${greet}`);
}

// // if u dont want space 
// const greeting = "Hello World !"
// for (const greet of greeting) {
//     if (greet == " ") {
//         continue
//     }else{
//     console.log(`Each char idd ${greet}`);    
//     }
    
// }


// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")


console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
}

const myObject = {
    'game': 'NFS',
    'game':"Spiderman"
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}

for (const key in map) {
    console.log(key);
    
}