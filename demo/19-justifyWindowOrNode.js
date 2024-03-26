let isBrowser = typeof window !== 'undefined' && window == '[object Window]'

let isNode = typeof global !== 'undefined' && global == '[object global]'

console.log(isBrowser)

console.log(isNode)
