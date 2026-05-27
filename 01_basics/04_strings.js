const name="Anant"
const repoCount=50
// this method is not appreciated now console.log(name + repoCount + "hello");
// we use this back tick key use krne k liye option+backtick key use kro: 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//another way of declaring a string is :
const Name2= new String('hello world')
const Name3= new String('Hello-this-is-my-first-time-learning-javascript')
console.log(Name2[6])
console.log(Name2.__proto__)
console.log(Name2.length)

console.log(Name2.toUpperCase())

console.log(Name2.charAt(1))

console.log(Name2.indexOf('w'))

const newString= Name2.substring(0,4)

console.log(newString)

const anotherName=Name2.slice(-11,5)
console.log(anotherName)

const home="  ghaziabad         "
console.log(home)
console.log(home.trim()) // is se extra blank spaces jo hoti hai vo cut hojati h
const url= "https://anant.com/anant%20sharma"
console.log(url.replace('%20' , '-'))// used to replace certain char with another
console.log(url.includes('A'))
// isse ham pata laga skte hai ki koi character string m present hai ki nhi true false m jawab dega
console.log(Name3.split('')) // isse ham string ko arrays k dabbo m split kr skte hai