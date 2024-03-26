let arr = [1, 2, 3, [2, 3, 4, [1, 2, 3]]]

function unZip(arr, newArr) {
  // 1. 如果arr是列表那么递归，如果不是则直接输出
  if (arr instanceof Array) {
    // 递归
    arr.forEach((item) => unZip(item, newArr))
  } else {
    // 输出
    // console.log(arr)
    newArr.push(arr)
  }
}

let newArr = []
unZip(arr, newArr)
console.log(newArr)
