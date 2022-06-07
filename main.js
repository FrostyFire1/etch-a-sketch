let selectedColor = "yellow";

function makeGrid() {
  let grid = document.querySelector(".grid");
  console.log(grid);
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
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
makeGrid();
