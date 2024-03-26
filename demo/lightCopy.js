// // 数组浅拷贝, 直接使用等于号？
// // 不行，直接使用 = 会直接赋值引用的地址，会导致两个一起改变
// let arr1 = [1, 2, 3, 4]
// let arr2 = arr1
// arr2[1] = 5
// console.log(arr2) // 1,5,3,4
// console.log(arr1) // 1,5,3,4
// 1. 使用扩展运算符
// let arr1 = [1, 2, 3, 4]
// let arr2 = [...arr1]
// arr2[2] = 5
// console.log(arr2) // 1 ,2 ,5, 4
// console.log(arr1) // 1, 2, 3, 4
// 2. 使用.slice()方法
// let arr1 = [1, 2, 3, 4]
// let arr2 = arr1.slice()
// arr2[2] = 5
// console.log(arr2) // 1 ,2 ,5, 4
// console.log(arr1) // 1, 2, 3, 4
// 3. 使用.assign()方法
// let arr1 = [1, 2, 3, 4]
// let arr2 = []
// Object.assign(arr2, arr1)
// arr2[2] = 5
// console.log(arr2) // 1 ,2 ,5, 4
// console.log(arr1) // 1, 2, 3, 4
// 4. 使用Array.from()方法
// let arr1 = [1, 2, 3, 4]
// let arr2 = Array.from(arr1)
// arr2[2] = 5
// console.log(arr2) // 1 ,2 ,5, 4
// console.log(arr1) // 1, 2, 3, 4

// 对象的浅拷贝
// 1. 使用扩展运算符
// let obj1 = { name: 'hh', age: 18 }
// let obj2 = { ...obj1 }
// obj2.age = 20
// console.log(obj1) // { name: 'hh', age: 18 }
// console.log(obj2) // { name: 'hh', age: 20 }
// // 2. 使用Object.assign()方法
// let obj1 = { name: 'hh', age: 18 }
// let obj2 = {}
// Object.assign(obj2, obj1)
// obj2.age = 20
// console.log(obj1) // { name: 'hh', age: 18 }
// console.log(obj2) // { name: 'hh', age: 20 }

let obj1 = { name: 'hh', age: 18 }
let obj2 = Array.from(obj1)
console.log(obj2)
