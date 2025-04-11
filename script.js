const grid = document.querySelector("#grid");
const btnCustom = document.querySelector("#btn-custom");
const btn16 = document.querySelector("#btn-16");
const btn32 = document.querySelector("#btn-32");
const btn64 = document.querySelector("#btn-64");
const btnRandom = document.querySelector("#btn-random");
const color = document.querySelector("#color");

let currentGridSize = 16;
let randomColor = false;

const randomColors = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"indigo",
	"violet",
];

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
	if (randomColor) {
		const randomNum = Math.floor(Math.random() * 7);
		this.style.backgroundColor = randomColors[randomNum];
		console.log(randomNum);
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

document.body.onload = createGrid();
btnCustom.addEventListener("click", customGrid);
btn16.addEventListener("click", () => createGrid(16));
btn32.addEventListener("click", () => createGrid(32));
btn64.addEventListener("click", () => createGrid(64));
btnRandom.addEventListener("click", () => (randomColor = true));
color.addEventListener("change", (e) => {
	randomColor = false;
	e.target.value;
});
