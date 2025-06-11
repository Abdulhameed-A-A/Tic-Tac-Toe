let nextPlayerIsX = true;
let playerMove = [];
let gameHasFinished = false;

const cellContainer = document.querySelector('.js-tic-tac-toe')
const gameStatus = document.querySelector('.game-status')

const checkForWin = () => {
  let playerToCheckWinFor = nextPlayerIsX ? "O" : "X"
  const conditionForWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  conditionForWin.forEach((condition) => {
    if(gameHasFinished) return;
    let allThree = 0;
    condition.forEach((index) => {
      if(playerMove[index] === playerToCheckWinFor) {
        allThree++
      }
    })
    if(allThree > 2) {
      console.log(`player ${playerToCheckWinFor} has won`)
      gameHasFinished = true;
      gameStatus.textContent = `Player ${playerToCheckWinFor} has won`
      return
    }
  })
  let isTied = (playerMove.filter((item) => item !== "")).length === 9;
  if(isTied) {
    gameHasFinished = true
    gameStatus.textContent = `The game ended in a tie`
  }
}



Array.from({ length: 9 }).map((_, index) => {
  playerMove.push("")

  const cell = document.createElement('div')
  cell.classList.add('cell')
  cell.classList.add(`cell-${index}`)
  cell.addEventListener('click', () => {
    if(gameHasFinished) return;
    if(!cell.textContent) {
      if(nextPlayerIsX) {
        cell.textContent = "X"
        playerMove[index] = "X"
        nextPlayerIsX = false
      } else {
        cell.textContent = "O"
        playerMove[index] = "O"
        nextPlayerIsX = true
      }
      console.log(playerMove);
      checkForWin()
    } else {
      return
    }
  })
  cellContainer.appendChild(cell);

})


console.log(playerMove)
