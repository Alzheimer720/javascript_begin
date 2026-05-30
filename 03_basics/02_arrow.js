const user={
    username:"Anant",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to our world`);
    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()
////////////////////////////////////////////// arrow function
const chai =() =>{ // this is known as explicit return where we use return and curly braces
    let username="Anant" 
console.log(this.username);
}
///// second method 
const addtwonum= (num1,num2)=> (num1+num2) // this is known as implicit return where we dont use return keyword and use paranthesis
console.log(addtwonum(3,4))