let o = { f: 'hahah' }
let value = 'value'
// p 是 o 的代码
let p = new Proxy(o, {
  get(target, property) {
    // 获取对象o上的属性，有则返回该属性的值，没有就返回变量value
    return property in target ? target[property] : value
  },
  set(target, property, value) {
    // 设置对象o 的value
    console.log('??')
    target[property] = value
    return true
  },
  deleteProperty: function (target, property) {
    // 删除对象o 上的属性
    console.log(property, 'was deleted!')
    delete target[property]
    return true
  }
})
o.f = 'was refined'
console.log(o.f)
delete o['f']
console.log(o.f)
// console.log(p.f)
