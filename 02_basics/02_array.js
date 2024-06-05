const marvel_heros = ["thor", "Ironman", "CaptanAmerica"]
const dc_heros = ["SuperMan", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);

 const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);


const another_array =[1,2,3,[4,5,6], 7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hitesh"));
console.log(Array.from({name: "Hitesh"})); // Intresting


let Score1 = 300
let Score2 = 500
let Score3 = 600

console.log(Array.of(Score1,Score2, Score3));


