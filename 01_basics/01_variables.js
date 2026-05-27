const accountId=12345
let accountEmail="anantfake@gmail.com"
var accountPass="123"
accountCity="Ghaziabad"
//accountId=2
accountEmail="fakecity@gmail.com"
accountPass="abcdefg"
accountCity="Jaipur"
console.log(accountId)
/*
dont use var because of issue in block scope and functional scope var ki jgh ab let use krte hai
*/
console.table([accountId,accountEmail,accountCity,accountPass]) 