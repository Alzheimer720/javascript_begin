//dates
// typeof krke date ka datatype pta krenge to object aata hai very important
// let Mydate=new Date()
// console.log(Mydate.toString())
// console.log(Mydate.toDateString())
// console.log(Mydate.toISOString())
// console.log(Mydate.toJSON())
// console.log(Mydate.toLocaleString())
// console.log(Mydate.toTimeString())
//  const indianTime = myDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
//  console.log(indianTime)
const myDate = new Date();

// The magic string is 'Asia/Kolkata'
const indianTime = myDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
console.log(indianTime);
 // agr khud ki date declare krni h
//  let MyrandomDate= new Date(2005 ,6,20)
 let MyrandomDate= new Date("2006-07-20")
 console.log(MyrandomDate.toLocaleString())
 // agr hame jese polls aur quizzes m first one find krna hota hai to ese kro:
 let myTimeStamp=Date.now()
 console.log(myTimeStamp)
 