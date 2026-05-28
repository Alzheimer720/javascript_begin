const flipkartUser=new Object() // singleton object
console.log(flipkartUser)
flipkartUser.name="Anant Sharma"
flipkartUser.age=20
flipkartUser.ID="AS123"
const regularUser={
    mail:"example@gmail.com",
    fullName:{
        userFullName:{
    firstName:"Anant",
    lastName:"Sharma"
}
    }
}
// console.log(regularUser.fullName.userFullName.firstName)
// merging of two objects ->
const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3={...obj1,...obj2} //method 1
const obj4=Object.assign({},obj1,obj2) //method 2 
// console.log(obj3)
// console.log(obj4) 
//++++++++++++++++++++++++++++++++++++++++++++
// object destructuring ->
const course={ 
    coursename:"Javascript",
    price:999,
    courseInstructor:"Anant Sharma"
}

const {courseInstructor: human}=course
console.log(human)
//+++++++++++++++++++++++++++++++++++++++++++++
//json
[
{},
{},
{},
{},
{}
]