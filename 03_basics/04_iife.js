// Immediately Invoked Function Expressions (IIFE)

/* Avoid Global Scope Pollution: By using an IIFE, 
you can create a new scope for your variables and functions, 
preventing them from polluting the global scope. 
This is particularly useful in large projects or when integrating 
multiple scripts.*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // anonymous IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
