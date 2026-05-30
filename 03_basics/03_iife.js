// immediately invoked function Expression
 /* global scope ke pollution se problem hoti hai usko hatane k liye 
 isliye ham iife ka use krte hai vo us function ko turant execute krdeta hai
*/

(function chai(){ //named iiefe
    console.log(`DB Connected`)
})(); // Ab ise function ko yaha end krne k liye semi colon lagana padega
( (name) => { // unnamed iife
    console.log(`DB two connected ${name}`)
}) ('Anant')