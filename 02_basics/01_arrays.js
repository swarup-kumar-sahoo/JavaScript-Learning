// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myHeors.indexOf("naagraj"));

const newArr = myArr.join()
console.log(myArr);
console.log( newArr); // Convert array to string
console.log(typeof newArr); // string



// slice, splice

const myn1 = myArr.slice(1, 3) // 1, 2
console.log(myArr); // It does not remove the element from the original array
console.log(myn1);


const myn2 = myArr.splice(1, 3) // 1, 2, 3
console.log(myArr); // It also remove the element from the original array
console.log(myn2);