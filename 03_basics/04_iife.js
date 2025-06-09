// Immediately invoked function expressions (IFFE)
// global scope k pollution se problem hoti hai kai baar , toh woh global scope k jo variable hai , unke polution ko hatane k liye iffe use hota hai 


(function chai(){      // This called named iife because it have name
    console.log(`DB CONNECTED`);
})();     // iffe syntax


( (name)=>{               // This is called simple iife
    console.log(`DB CONNECTED TWO ${name}`);
})('AKshat');      // semicolon is must in iife