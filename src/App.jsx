/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import Square from './components/Square';

function App() {
  //Map board 3x9
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  //Check winner or loser logic for the game
  const chooseSquare = (squareIndex) => {};

  return (
    <main>
      <section className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className='row'></div>
        <div className='row'></div>
      </section>
    </main>
  );
}

export default App;
