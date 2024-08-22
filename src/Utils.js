export const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Modify checkWin to return a boolean indicating if there's a winner
export const checkWin = (board, setResult) => {
  let hasWon = false;

  Patterns.forEach((currentPattern) => {
    const firstPlayer = board[currentPattern[0]];
    if (firstPlayer === '') {
      return;
    }

    let foundWinningPattern = true;
    currentPattern.forEach((index) => {
      if (board[index] !== firstPlayer) {
        foundWinningPattern = false;
      }
    });

    if (foundWinningPattern) {
      setResult({
        winner: firstPlayer, // Use firstPlayer to correctly indicate the winner
        state: 'Won',
      });
      hasWon = true;
    }
  });

  return hasWon; // Return true if a win is detected
};

export const checkTie = (board, setResult) => {
  let filled = true;
  board.forEach((square) => {
    if (square === '') {
      filled = false;
    }
  });

  if (filled) {
    setResult({ winner: 'No One', state: 'Tie' });
  }
};

// Restart the game
export const restarGame = (setBoard, setPlayer) => {
  setBoard(['', '', '', '', '', '', '', '', '']);
  setPlayer('X');
};
