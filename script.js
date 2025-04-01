const grid = document.querySelector('#grid');

function createGrid(gridSize = 100) {
    const size = (gridSize * gridSize);
    for(let i = 0; i < size; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        grid.appendChild(newCell);
    
    }
}

document.body.onload = createGrid();
