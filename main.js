let selectedColor = "yellow";

function makeGrid(sideLength) {
  let grid = document.querySelector(".grid");
  for (let i = 0; i < sideLength; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < sideLength; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = selectedColor;
      });
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

function removeGrid() {
  let grid = document.querySelector(".grid");
  while (grid.hasChildNodes()) {
    let row = grid.childNodes[0];
    grid.removeChild(row);
    grid = document.querySelector(".grid");
  }
}

let gridButtton = document.querySelector("#make");
gridButtton.addEventListener("click", () => {
  let answer = parseInt(
    prompt("What would you like the new size of the grid to be?")
  );
  removeGrid();
  makeGrid(answer);
});
makeGrid(16);
