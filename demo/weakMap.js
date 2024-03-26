let weakmap_ = new WeakMap()

let obj = {}

weakmap_.set(obj, { name: 'test' })
console.log(weakmap_.get(obj)) // { name: 'test' }
console.log(weakmap_.has(obj)) // true
console.log(weakmap_.delete(obj)) // true 删除成功会返回true否则false
console.log(weakmap_.has(obj)) // false
