console.log(Object.is(-0, +0)) // false
console.log(Object.is(NaN, NaN)) // true

// console.log(NaN === NaN) // false
// console.log(-0 === +0) // true

console.log(null === null) // true
console.log(undefined === undefined) // true
console.log(null === undefined) // false

console.log(Object.is(null, undefined)) // false
