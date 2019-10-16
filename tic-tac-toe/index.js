let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
let win=false
const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;
  if(!win){
  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  
    checkWin();
    turn = turn === "x" ? "o" : "x";

    displayTurn(turn);
  }


});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  var h1 = document.querySelector("h1.turn")
  h1.innerHTML=turn.toUpperCase()+" turn"
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  /**
   * ***  --- --- *-- -*- --* *-- --*
   * ---  *** --- *-- -*- --* -*- -*-
   * ---  --- *** *-- -*- --* --* *--
  */
  symbols.map(symbol=>{
    if((symbol[0]==symbol[1])&&(symbol[1]==symbol[2])&&(symbol[0]!="")){
      win=true;
    }   
  })
  for (let i = 0; i < 3; i++) {
    if((symbols[0][i]==symbols[1][i])&&(symbols[1][i]==symbols[2][i])&&(symbols[1][i]!="")){
      win=true
    }
  }
  if((symbols[0][0]==symbols[1][1])&&(symbols[1][1]==symbols[2][2])&&(symbols[1][1]!="")){
    win=true
  }
  if((symbols[0][2]==symbols[1][1])&&(symbols[1][1]==symbols[2][0])&&(symbols[1][1]!="")){
    win=true
  }
  if(win==true){
    alert(`wygrał gracz ${turn}`)
    
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
var resetButton=document.querySelector("button.reset")
resetButton.addEventListener("click", reset)
function reset() {
  // 4. zresetuj stan gry
  tiles.map(tile=>{
    tile.innerHTML=""
    tile.classList=""
    tile.classList.add("tile")
  })
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  win=!win
}
