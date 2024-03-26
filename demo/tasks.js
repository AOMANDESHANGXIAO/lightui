console.log(1)
// async function async1() {
//   await async2()
//   console.log(2)
// }
function async1() {
  return new Promise((resolve) => {
    async2().then(() => {
      console.log(2)
      resolve()
    })
  })
}
// async function async2() {
//   console.log(3)
// }
function async2() {
  return new Promise((resolve) => {
    console.log(3)
    resolve()
  })
}

async1()

setTimeout(function () {
  console.log(4)
}, 0)

new Promise((resolve) => {
  console.log(5)
  resolve()
})
  .then(function () {
    console.log(6)
  })
  .then(function () {
    console.log(7)
  })

console.log(8)
