console.log(1)

setTimeout(() => {
  let n = 10n
  while (n > 0) {
    n--
  }
  console.log(2)
}, 0)

setTimeout(() => {
  console.log(3)
}, 0)

console.log(4)
