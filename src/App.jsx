import './App.css';
import { useState, useEffect } from 'react';
import Square from './components/Square';
import { Patterns } from './Utils';

function App() {
  // Map board 3x3
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  useEffect(() => {
    checkWin();
    checkTie();
  }, [board]);

  useEffect(() => {
    if (result.state !== 'none') {
      alert(`Game finished! Winning player: ${result.winner}`);
    }
  }, [result]);

  // Check winner or loser logic for the game
  const chooseSquare = (squareIndex) => {
    // Prevent changing a filled square
    if (board[squareIndex] !== '') {
      return;
    }

    setBoard(
      board.map((value, index) => {
        if (index === squareIndex) {
          return player;
        }
        return value;
      })
    );

    // Switch the player
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  // Checks the winner
  const checkWin = () => {
    // Loop through the patterns arrays index with the players
    Patterns.forEach((currentPattern) => {
      // Checks which player won
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
          winner: firstPlayer, // Change to firstPlayer to accurately reflect the winner
          state: 'Won',
        });
        restarGame();
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: 'No One', state: 'Tie' });
      restarGame();
    }
  };

  // Restart the game
  const restarGame = () => {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setPlayer('X');
  };

  return (
    <main>
      <section className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className='row'>
          <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className='row'>
          <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </section>
    </main>
  );
}

export default App;
