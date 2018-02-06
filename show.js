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
