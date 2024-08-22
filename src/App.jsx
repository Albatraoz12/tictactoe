import './App.css';
import { useState, useEffect } from 'react';
import Square from './components/Square';
import { checkTie, checkWin, restarGame } from './Utils';

function App() {
  // Map board 3x3
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });

  useEffect(() => {
    const hasWon = checkWin(board, setResult);

    if (!hasWon) {
      checkTie(board, setResult);
    }
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

  return (
    <main>
      <section className='intro'>
        <h1>Welcome to my TicTacToe Game!</h1>
      </section>
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
      <section>
        {result.state !== 'none' && (
          <button
            className='btn'
            onClick={() => restarGame(setBoard, setPlayer, setResult)}
          >
            Restart the Game
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
