// array

const myArr = [0, 1 , 2, 3, 4, 5, 40]
const myHeros = ["Shaktiman", "Khiladi"]

const myArr2 = new Array(1, 2, 3, 5, 6)
console.log(myArr[1]);

// Arrays Methods

// myArr.push(9)
// myArr.push(34)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(40));
// console.log(myArr.indexOf(40));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// Slice , Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);