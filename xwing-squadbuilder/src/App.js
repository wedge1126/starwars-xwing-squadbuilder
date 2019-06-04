import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faPlus as fasPlus,
  faMeteor as fasMeteor,
  faShare as fasShare,
  faTh as fasTh,
  faFutbol as fasFutbol,
  faJedi as fasJedi,
  faTimes as fasTimes
} from '@fortawesome/free-solid-svg-icons';
import rebelShips from './data/rebel-ships.json'
import ShipsPanel from './ShipsPanel';
import SquadPanel from './SquadPanel';

library.add(fasPlus, fasMeteor, fasShare, fasTh, fasFutbol, fasJedi, fasTimes);

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
