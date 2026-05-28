const marvel_heroes=["thor","spiderman","ironman"]
const dc_heroes=["superman","batman","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])
const superheroes=marvel_heroes.concat(dc_heroes)
console.log(superheroes)
// another way->
const newheroes=[...marvel_heroes,...dc_heroes] // better and easy way known as spread
// yaad rkhne k liye-> kach ka glass niche gira pieces spread kr gye
console.log(newheroes)
//important 
const anotherArray=[1,2,[3,4],[5,5,[7,8,9]]]
const new_anotherArray=anotherArray.flat(3) 
// is method se sare substring/sub array tod kr ek single bigger array ka part ban jate hai.
// isme hame depth deni hoti h jab depth na pta ho infinity dal do apne ap samhal lega 
console.log(new_anotherArray) 
console.log(Array.isArray("Anant")) // ese ham object/ string ko array bana skte hai
console.log(Array.from("Anant"))
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3))