// let s = 'str'
// let a = 180
// let bi = 1800n
// let b = true
// let NULL_ = null
// let Undefinded = undefined
// let sy = Symbol()

// let arr = [1, 2, 3, 4]
// let obj = {
//   name: 'xie',
//   age: 18
// }
// function fun() {
//   console.log(111)
// }
// // instanceof 运算符判断构造函数属性的 prototype 属性 也就是原型对象是否出现在某个实例对象的原型链上
// let s = new String()
// console.log(s instanceof String) // true
// let s1 = '1234' // 不是通过构造函数出来的
// console.log(s1 instanceof String) // false
// let n = 120
// console.log(n instanceof Number) // false
// let n1 = new Number(120)
// console.log(n1 instanceof Number) // true
// console.log(n1) // [Number: 120]

function C() {}
function D() {}
let obj = new D()
// console.log(obj instanceof D) // 因为obj.__proto__ === D.prototype 或者 Object.getPrototypeOf(o) === D.prototype
// console.log(obj.__proto__ === D.prototype) // true
// console.log(Object.getPrototypeOf(obj) === D.prototype) // true

// 手写一个instanceOf 判断obj1是否是构造函数fun的实例
function myInstanceOf(obj1, fun) {
  // 通过原型链来查找
  let proto = Object.getPrototypeOf(obj1)
  while (proto !== null) {
    if (proto === fun.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
console.log(myInstanceOf(obj, C))
