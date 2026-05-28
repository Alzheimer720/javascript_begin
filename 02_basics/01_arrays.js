//arrays
const Arrays=[0,1,2,3,4,5]
const heroes=["ironman", "superman", "batman"]
const myArr= new Array(1,2,3,4,5)
//console.log(Arrays)
 //array methods
 myArr.push(6)
 myArr.push(7)
//  console.log(myArr)
//  myArr.pop()
//  console.log(myArr)
//  myArr.unshift(6) // ye push hai from the end index
//  console.log(myArr)
//  myArr.shift()  // ye pop hai just from the starting index
//  console.log(myArr)
//  console.log(myArr.includes(8))
// const NewArr=myArr.join() // converts array to string
// console.log(typeof(NewArr))
// console.log("A " , myArr)
// const myNew1= myArr.slice(1,3) 
/* 1 se lekar 3-1=2 tk elements print krta hai it creates a copy of that specified array without 
mutating/making change to origibal array
*/
console.log("A->", myArr)
const myNew2=myArr.splice(1,2,5)
/* splice ye krta hai ki us index se lekar jitne elements enter
 kroge for example 2 utne delete krdega including the index with which u started,, result m 
 vo cut kre hue elements return krega and ab jab after this operation youll print the array then 
 hame vo naya mutated/cut hua array milega we can also insert an element using this technique
*/
// slice does not manipulate original array splice does   
console.log(myNew2)
console.log("B->",myArr)