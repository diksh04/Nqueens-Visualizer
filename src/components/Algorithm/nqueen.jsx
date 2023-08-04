import { delay, disableAllButtons, MakeDelay } from "../Utilities/Utilities";

var col = []; //for checking for column
var leftDiagonal = []; //for checking on left diagonal
var rightDiagonal = []; //for checking on right diagonal

export async function nqueenHelper(grid, i, n) {
  var c = i * n;
  if (i === n) {
    return true;
  }
  var l,
    j = 0;
  for (l = c; l < c + n; l++, j++) {
    var color = grid[i].style.background;
    if (
      col[j] === false &&
      leftDiagonal[i - j + n - 1] === false &&
      rightDiagonal[j + i] === false
    ) {
      rightDiagonal[j + i] = leftDiagonal[i - j + n - 1] = col[j] = true;
      grid[l].style.background = "green";
      grid[l].innerHTML = "&#9813";
      await MakeDelay(delay);
      grid[l].style.background = color;
      var ch = await nqueenHelper(grid, i + 1, n);
      if (ch === true) {
        return true;
      }
      await MakeDelay(delay);
      grid[l].style.background = "red";
      await MakeDelay(delay);
      grid[l].innerHTML = "";
      grid[l].style.background = color;
      rightDiagonal[j + i] = leftDiagonal[i - j + n - 1] = col[j] = false;
    } else {
      await MakeDelay(delay);
      grid[l].style.background = "red";
      await MakeDelay(delay);
      grid[l].style.background = color;
    }
  }
  return false;
}

export async function Nqueen() {
  disableAllButtons(true);
  document.getElementById("nqueen").className = "btndisabled";
  document.getElementById("clear").className = "btndisabled";
  var grid = document.querySelectorAll(".element-block");
  var n = grid.length;
  n = Math.sqrt(n);
  col = [];
  leftDiagonal = [];
  rightDiagonal = [];
  for (var i = 0; i < n; i++) {
    col.push(false);
  }
  for ( i = 0; i < 2 * n - 1; i++) {
    leftDiagonal.push(false);
    rightDiagonal.push(false);
  }
  await nqueenHelper(grid, 0, n);
  document.getElementById("nqueen").className = "btn";
  document.getElementById("clear").className = "btn";
  disableAllButtons(false);
}
