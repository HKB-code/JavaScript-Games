let currTileMole, currTilePlant;
let score = 0;
let gameOver = false;
window.onload = function () {
  setBoard();
};

function setBoard() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.classList.add("tile");
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000);
  setInterval(setPlant, 1500);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) return;

  if (currTileMole) {
    currTileMole.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./img/monty-mole.png";

  let num = getRandomTile();
  if (currTilePlant && currTilePlant.id == num) {
    return;
  }
  currTileMole = document.getElementById(num);
  currTileMole.appendChild(mole);
}

function setPlant() {
  if (gameOver) return;
  if (currTilePlant) {
    currTilePlant.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./img/piranha-plant.png";

  let num = getRandomTile();
  if (currTileMole && currTileMole.id == num) {
    return;
  }
  currTilePlant = document.getElementById(num);
  currTilePlant.appendChild(plant);
}

function selectTile() {
  if (gameOver) return;

  if (this === currTileMole) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currTilePlant) {
    document.getElementById("score").innerText = "Game Over" + score.toString();
    gameOver = true;
  }
}
