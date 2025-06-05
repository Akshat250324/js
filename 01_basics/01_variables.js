const accountId = 144546
let accountEmail = "kembulkarakshat@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2    not allowed
console.log(accountId);
accountEmail = "ak@ak.com"
accountPassword = "654654"
accountCity = "mumbai"
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// prefer not to use var because of issues in block scope and functional scope 

