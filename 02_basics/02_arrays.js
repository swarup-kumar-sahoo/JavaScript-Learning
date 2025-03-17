const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // 2D array

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator (alternative of concat)

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method (Infinity is used to flat the nested array)
console.log(real_another_array);



console.log(Array.isArray(["Hitesh"])) // check if it is array or not
console.log(Array.from("Hitesh")) // convert string to array
console.log(Array.from([{name: "hitesh"}, {name: "swarup"}])) //If we pass object then it will convert it to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));