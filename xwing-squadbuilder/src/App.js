import React from 'react';
import './App.css';
import rebelShips from './data/rebel-ships.json'
import ShipsPanel from './ShipsPanel';

function App() {
  
  return (
    <div className="App">
      <h1>X-Wing Squad Builder</h1>
      <ShipsPanel ships={rebelShips} />
    </div>
  );
}

export default App;
