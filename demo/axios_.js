// axios是一个对象
export function axios_(method, baseURL, router) {
  // this.method = method
  // this.baseURL = baseURL
  // this.router = router
  // 创建好应该发送请求
  return new Promise((resolve, reject) => {
    // 1. 创建XHR对象
    const xhr = new XMLHttpRequest()

    // 2. 指定方法和URL
    xhr.open(baseURL + router)

    // 3. 绑定监听事件
    xhr.addEventListener('loadend', () => {
      const res = JSON.parse(xhr.response)
      resolve(res)
    })
    // 4. 发送请求
    xhr.send()
  })
}

// const axios_proto = {
//   constructor: axios_
// }
