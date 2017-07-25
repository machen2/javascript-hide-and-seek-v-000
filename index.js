function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
  let current = document.querySelector('#grand-node') // or document.getElementById('grand-node')
  let next = current.children[0] // only one node at each level

  while(next) {
    current = next
    next = current.children[0]
  }
  return current //when no more children exist
}



/* or
function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list')

  for (let k = 0; k < rankedList.length; k++) {
    let rankedChildren = rankedList[k].children

    for(let i = 0; i < rankedChildren.length; i++) {
      rankedChildren[i].innerHTML = parseInt(rankedChildren[i].innerHTML) + n
    }
  }
}
*/
