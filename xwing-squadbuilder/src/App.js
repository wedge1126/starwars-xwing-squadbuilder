import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus as fasPlus } from '@fortawesome/free-solid-svg-icons';
import rebelShips from './data/rebel-ships.json'
import ShipsPanel from './ShipsPanel';

library.add(fasPlus);

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>X-Wing Squad Builder</h1>
        <ShipsPanel ships={rebelShips} />
      </div>
    );
  }
}
