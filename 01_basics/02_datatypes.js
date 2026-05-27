"use strict"; // treats all js codes as newer version
// alert(3+4) // we are using node js not browser
//console.log(3+3)
//console.log("Anant") //code readability should be high
let age=18
let name="anant"
let isLggedIn=true
/*
number=> 2 to the power 53
big int
string=> ""
boolean => true / false
null =>standalone value
undefined=> abhi assign nhi hui h 
symbol => unique
object => 
*/
//console.log(typeof(null))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
types of datatypes: primitive and non primitive
primitive:7 types: Number, Boolean, String, undefined, null ,BigInt, Symbol
non-primitive(Reference type):Array, Objects, Functions

*/
const heroes=["batman", "superman", "ironman"];
let myObj={
    name: "Anant",
    age: 20
}
const myFunction = function(){
     console.log("Hello World"); 
}
console.log(typeof(myFunction))
// https://262.ecma-international.org/5.1/#sec-11.4.3
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive (isme copy milti hai)), heap(non-primitive(isme hame reference milta hai))