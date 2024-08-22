/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  return (
    <main>
      <section className='board'>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </section>
    </main>
  );
}

export default App;
