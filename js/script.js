console.log('campo minato')

let sideGrid = 10
let numCell = sideGrid ** 2

console.log(sideGrid, numCell)

const gridElement = document.querySelector('.grid')
console.log(gridElement)

for (let i = 0; i < numCell; i++) {
    let n = i + 1
    console.log(n)
    let divString = `<div class="cell" style="width: calc(100% / ${sideGrid});" >${n}</div>`
    gridElement.innerHTML += divString
}

const cellElements = document.querySelectorAll('.cell')
console.log(cellElements)

for (let i = 0; i < cellElements.length; i++) {
    const cell = cellElements[i]

    cell.addEventListener('click', function () {
        console.log(i + 1)
    })
}

function onClick() {
    console.log(i + 1)
}

