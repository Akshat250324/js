const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)   combines both arrays but take the second array , i.e the one in the bracket as a new element
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)
// concat - combines arrays and returns new array 


// console.log(allheros);
// spread operator- spread all the values
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// flat - if many sub arrays are their they can be spread into a single array by giving the depth limit , eg.infinity
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// data scraping - different format data can be converted into array

console.log(Array.isArray("akshat"))
console.log(Array.from("akshat"))
// from - to convert anything into array

console.log(Array.from({name:"akshat"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

