console.log('campo minato')
const gridElement = document.querySelector('.grid')
const btnElement = document.querySelector('.btn-play')

btnElement.addEventListener('click', play)

function onClick(el) {
    el.classList.toggle('cell-click')
}

function play (){
console.log('play')
reset ()
gridGenerate()
const cellElements = document.querySelectorAll('.cell')
for (let i = 0; i < cellElements.length; i++) {
    const cell = cellElements[i]

    cell.addEventListener('click', function () {
        onClick(cell)
    })
}
}

//FUNCTION REC
function reset (){
    gridElement.innerHTML = ''
}

function gridGenerate (side){
    let sideGrid = 10
    let numCell = sideGrid ** 2

for (let i = 0; i < numCell; i++) {
    let n = i + 1
    let divString = `<div class="cell" style="width: calc(100% / ${sideGrid});" >${n}</div>`
    gridElement.innerHTML += divString
}
}



