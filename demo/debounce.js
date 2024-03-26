// 防抖 要利用JS的闭包特性
function debounce(fun, wait) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fun(...args)
    }, wait)
  }
}

// 节流 要利用JS的闭包特性
function throttle(fun, wait) {
  let timerId
  return function (...args) {
    if (timerId) return
    timerId = setTimeout(() => {
      fun(...args)
      clearTimeout(timerId)
    }, wait)
  }
}

function fun(num1, num2) {
  console.log(1234 + num1 + num2)
}

const newFun = debounce(fun, 1000)
const otherFun = throttle(fun, 2000)
newFun(123, 456)
otherFun(123, 456)
