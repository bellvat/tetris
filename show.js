const grid = document.querySelector('.grid')

function createGrid(){
  for (let r = 0; r < 12; r++){
    row = document.createElement('tr')
    grid.appendChild(row)
    row.id = r + 1
    for (let c = 0; c < 12; c++){
      col = document.createElement('td')
      row.appendChild(col)
      col.id = c + 1
    }
  }
}
createGrid()

let square = document.querySelector('.square')
let mid = document.createElement('div')
let inner = document.createElement('div')

mid.classList.add('mid')
inner.classList.add('inner')
square.appendChild(mid)
mid.appendChild(inner)
