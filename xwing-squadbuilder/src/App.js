import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faPlus as fasPlus,
  faMeteor as attack,
  faShare as agility,
  faTh as hull,
  faFutbol as shield,
  faJedi as force
} from '@fortawesome/free-solid-svg-icons';
import rebelShips from './data/rebel-ships.json'
import ShipsPanel from './ShipsPanel';
import SquadPanel from './SquadPanel';

library.add(fasPlus, attack, agility, hull, shield, force);

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>X-Wing Squad Builder</h1>
        <ShipsPanel ships={rebelShips} />
        <SquadPanel ships={rebelShips[0].pilots} />
      </div>
    );
  }
}
