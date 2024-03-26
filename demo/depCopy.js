// function deepCopy(obj) {
//   // 如果obj不是一个引用数据类型那么直接返回
//   if (obj === null || typeof obj !== 'object') {
//     return obj
//   }
//   // 根据obj是数组还是对象来为其分配初始值
//   let newObj = Array.isArray(obj) ? [] : {}
//   // Object.keys(obj) 返回一个由一个对象的自身可枚举属性的键名组成的数组
//   // 与for..in..相同
//   Object.keys(obj).forEach((key) => {
//     newObj[key] = deepCopy(obj[key])
//   })
//   return newObj
// }

// const obj = {
//   name: 'haha',
//   age: 18,
//   list: [10, 20, 30, { hah: 'hahaha' }]
// }

// let newObj = deepCopy(obj)
// console.log(newObj)

// // 1. 深度拷贝第一种实现方式 stringify+parse
// function deepCopyIfy(obj) {
//   return JSON.parse(JSON.stringify(obj))
// }

// let obj1 = {
//   name: 'ZhangsSan',
//   age: 18,
//   info: {
//     gender: 'female',
//     address: 'unknow',
//     notNumber: NaN, // 会被忽略
//     date: new Date('2022-12-31T23:59:59'), // Date会转换为字符串
//     testUn: undefined,
//     undefined: undefined, // 被忽略
//     infinity: Infinity, // 被忽略
//     regExp: /.*/ //正则表达式会被忽略
//   }
// }
// let obj2 = deepCopyIfy(obj1)
// obj2.info.gender = 'male'
// console.log(obj1)
// // {
// //   name: 'ZhangsSan',
// //   age: 18,
// //   info: {
// //     gender: 'female',
// //     address: 'unknow',
// //     notNumber: NaN,
// //     date: 2022-12-31T15:59:59.000Z,
// //     undefined: undefined,
// //     infinity: Infinity,
// //     regExp: /.*/
// //   }
// // }
// console.log(obj2)
// // {
// //   name: 'ZhangsSan',
// //   age: 18,
// //   info: {
// //     gender: 'male',
// //     address: 'unknow',
// //     notNumber: null,
// //     date: '2022-12-31T15:59:59.000Z',
// //     infinity: null,
// //     regExp: {}
// //   }
// // }

// 2. 全局的structedClone()方法将给定的值进行深拷贝
// let obj1 = {
//   name: 'ZhangsSan',
//   age: 18,
//   info: {
//     gender: 'female',
//     address: 'unknow',
//     notNumber: NaN, // 会被忽略
//     date: new Date('2022-12-31T23:59:59'), // Date会转换为字符串
//     testUn: undefined,
//     undefined: undefined, // 被忽略
//     infinity: Infinity, // 被忽略
//     regExp: /.*/ //正则表达式会被忽略
//   }
// }
// let obj2 = structuredClone(obj1)
// console.log(obj2)
// 手动实现深拷贝
function deepCopy(obj, cache = new WeakMap()) {
  // 1. 特例处理
  // 1.1 假如obj是null或者不是一个引用类型，直接返回值
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // 1.1 处理循环引用的问题
  if (cache.has(obj)) {
    return cache.get(obj)
  }

  // 1.2 处理 Date对象
  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  // 1.3 处理正则表达式对象
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }

  // 2. 假如obj是数组或者对象，就要进行递归复制
  // 2.1 首先判断一下obj是数组还是对象，方便初始化值
  let newObj = Array.isArray(obj) ? [] : {}

  // 将newObj放到chche中
  cache.set(obj, newObj)

  // 2.2 使用迭代器来遍历这个数组或者对象
  Object.keys(obj).forEach((item) => (newObj[item] = deepCopy(obj[item], cache)))

  return newObj
}

let obj1 = { name: 'nihao', age: 10, arr: [1, 2, 3, 4], date: new Date(), reg: /test/g }
obj1.next = obj1
// let arr1 = [1, 2, 3, [3, 4]]
let obj2 = deepCopy(obj1)
// let arr2 = deepCopy(arr1)
console.log(obj2)
// console.log(arr2)
