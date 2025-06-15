// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((nums)=>nums%2==0)
// const newNum = myNums.filter((num)=>num>4)
// const mycon = myNums.filter((num)=>{
//     return num>4
// })
// console.log(mycon);

// console.log(newNums);
// console.log(newNum)



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// const userbooks = books.filter((bk)=>bk.genre === 'History').filter((bk)=>bk.publish > 1995)
// console.log(userbooks);


// const year = books.filter((bk)=>{return bk.publish>=2000})
// // console.log(year);



// using foreach 
// const newNumss = []
// myNums.forEach((num)=>{
//     if (num>4) {
//         newNumss.push(num)
//     }
// })

// console.log(newNumss);


// ===================================================================

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.map((num)=>num*10)

// // using forach 
// console.log(newNum);
// const newArr = []
// const hello = myNums.forEach((nums)=>{
//     let hi = nums+10
//     newArr.push(hi)
// })

// console.log(newArr);

const newNums = myNums.map((num)=> num*10)
.map((num)=>num+1)
.filter((num)=>{
    return num>25
})
console.log(newNums);


// ================= REDUCE====================== 
const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,
initialValue)
   
console.log(sumWithInitial);


// currentvalue is the current value of the array 
// initialValue is the defined value 
// the inital value at the start goes into the accumuator 
// the calculated value is then updated inthe accumulator
// i

const muNums = [1,2,3]

// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval ${currval}`);
//     return acc +currval
// },0)


const myTotal = myNums.reduce((arr,curr)=>arr+curr,0)

console.log(myTotal);


const shoppingcart = [
    {itemname:"js course",
    Price : 2999
    },
    {itemname:"py course",
    Price : 999
    },
    {itemname:"mobile dev course",
    Price : 5999
    },
    {itemname:"data science course",
    Price : 12999
    }
]

const total = shoppingcart.reduce((acc,item)=>(acc+item.Price),0)
console.log(total);


// ============================Array practice =============================== 

