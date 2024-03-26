// let map_ = new Map()
// // 能够记住插入的键值对的顺序, 任何值和对象都可以当作作为一个键
// map_.set('1', 'Hellow')
// map_.set('2', 'world')
// let obj = { name: 'zhangSan' }
// map_.set({ name: 'zhangSan' }, 'age:18')
// map_.set(obj, 'age:18')

// console.log(map_.get('1'))
// console.log(map_.get('2'))
// console.log(map_.get({ name: 'zhangSan' }))
// console.log(map_.get(obj))

// for (let k of map_) {
//   console.log(k)
// }
// console.log(map_.size)
// // console.log({ name: 'XB', age: '24' } == { name: 'XB', age: '24' })
// // console.log({ name: 'XB', age: '24' } === { name: 'XB', age: '24' })
let map_ = new Map()

function myInstanceOf(obj1, fun) {
  let proto = Object.getPrototypeOf(obj1)

  while (proto !== null) {
    if (proto === fun.prototype) {
      return true
    }
    // proto = proto.__proto__
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

// console.log(map_ instanceof Object)
console.log(myInstanceOf(map_, Map))
