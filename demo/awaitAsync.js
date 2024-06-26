// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

function async1() {
  return new Promise((resolve) => {
    console.log('async1 start')
    async2().then(() => {
      console.log('async1 end')
    })
    resolve()
  })
}

// async function async2() {
//   console.log('async2 start')
//   return new Promise((resolve) => {
//     resolve()
//     console.log('async2 promise')
//   })
// }
async function async2() {
  console.log('async2 start')
  return new Promise((resolve) => {
    resolve()
    console.log('async2 promise')
  })
}

console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
})
  .then(function () {
    console.log('promise2')
  })
  .then(function () {
    console.log('promise3')
  })
console.log('script end')
