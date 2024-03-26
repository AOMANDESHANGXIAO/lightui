const tree = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [
              {
                id: 5,
                name: '部门5',
                pid: 4,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
]

function treeToFlat(tree, flat) {
  tree.forEach((element) => {
    let ele = {
      id: element.id,
      name: element.name,
      pid: element.pid
    }
    flat.push(ele)
    if (element.children) {
      treeToFlat(element.children, flat)
    }
  })
}

let flat = []

treeToFlat(tree, flat)

console.log(flat)
