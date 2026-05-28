// singleton 
// constructor method-> Object.create isi m singleton banta hai
 const mySym=Symbol("key1")
const JsUser={
    "fullname": "Anant Sharma",
    name: "Anant",
    [mySym]:"mykey1",
    Age : 20,
    Location: "Ghaziabad",
    isLoggedin : true,
    mail: "Anant@google.com",
    lastLogin:["Monday","Tuesday","Wednesday"]
}
console.log(JsUser.Age) // ese access kr skte hai object ke properties ko
console.log(JsUser["Location"]) // ese bhi access kr skte hai object ke properties ko
JsUser.Age=21 // ese update kr skte hai object ke properties ko
console.log(JsUser["fullname"]) // isko access krne k liye hame ese array format hi use krna padega
console.log(typeof(JsUser[mySym])) // ese access krte hai symbol ko object k andar
JsUser.mail="anant@chatgpt.com" // ese update kr skte hai 
// agr hame freeze krna hai object ko ki koi use aur update na kr ske to ese kro
// Object.freeze(JsUser)
JsUser.Location="Noida" // ab ham update bhi krna chahe tb bhi ni kr skte hai
console.log(JsUser.Location)
JsUser.greetings=function(){
    console.log("Hello JsUser")
}
 JsUser.greetings2=function(){
    console.log(`Hello ${this.name} how are you?`)
 }
console.log(JsUser.greetings())
console.log(JsUser.greetings2())    