const grid = document.querySelector("#grid");
const btnCustom = document.querySelector("#btn-custom");
const btn16 = document.querySelector("#btn-16");
const btn32 = document.querySelector("#btn-32");
const btn64 = document.querySelector("#btn-64");
const btn100 = document.querySelector("#btn-100");
const btnShader = document.querySelector("#btn-shader");
const btnRandom = document.querySelector("#btn-random");
let color = document.querySelector("#color");
let currentGridSize = 16;
let randomColor = false;
let shader = false;
// let shadeOpacity = 1;

function createGrid(gridSize = currentGridSize) {
	grid.innerHTML = "";
	currentGridSize = gridSize;
	const size = gridSize * gridSize;
	for (let i = 0; i < size; i++) {
		let newCell = document.createElement("div");
		newCell.classList.add("cell");
		newCell.classList.add(`cell-${gridSize}`);
		grid.appendChild(newCell);
	}
	selectCells();
}

function customGrid() {
	let input = parseInt(
		prompt("Enter a number of cells per side (Min - 2, Max - 100)")
	);
	if (input > 100) {
		input = 100;
	}
	if (input < 2) {
		input = 2;
	}
	grid.innerHTML = "";
	currentGridSize = input;
	const size = input * input;
	for (let i = 0; i < size; i++) {
		let newCell = document.createElement("div");
		newCell.style.width = `${800 / input}px`;
		newCell.style.height = `${800 / input}px`;
		newCell.classList.add("cell");
		grid.appendChild(newCell);
	}
	selectCells();
}

function draw() {
	if (shader) {
		return;
	}
	this.style.backgroundColor = color.value;
}

function selectCells() {
	let cells = document.querySelectorAll(".cell");
	cells.forEach((cell) => {
		cell.addEventListener("mouseover", draw);
	});
}

function drawShader() {
	console.log(this.style.backgroundColor);
}

function setShader() {
	shader = true;
	randomColor = false;
	createGrid();
	let cells = document.querySelectorAll(".cell");
	cells.forEach((cell) => {
		cell.addEventListener("mouseover", drawShader);
	});
}

document.body.onload = createGrid();
btnCustom.addEventListener("click", customGrid);
btn16.addEventListener("click", () => createGrid(16));
btn32.addEventListener("click", () => createGrid(32));
btn64.addEventListener("click", () => createGrid(64));
btn100.addEventListener("click", () => createGrid(100));
color.addEventListener("change", (e) => e.target.value);
btnShader.addEventListener("click", setShader);
