
const grid = document.querySelector('#grid');
const btn16 = document.querySelector('#btn-16');
const btn32 = document.querySelector('#btn-32');
const btn64 = document.querySelector('#btn-64');
const btn100 = document.querySelector('#btn-100');


function createGrid(gridSize = 100) {
    grid.innerHTML = "";
    const size = (gridSize * gridSize);
    for(let i = 0; i < size; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.classList.add(`cell-${gridSize}`);
        grid.appendChild(newCell);
    
    }

}

document.body.onload = createGrid();

btn16.addEventListener('click', () => createGrid(16));
btn32.addEventListener('click', () => createGrid(32));
btn64.addEventListener('click', () => createGrid(64));
btn100.addEventListener('click', () => createGrid(100));

