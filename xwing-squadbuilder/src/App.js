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
  constructor(props) {
    super(props);
    this.state = {
      squadShips: []
    };
  }

  addToSquad = (ship) => {
    if(ship.unique && this.state.squadShips.includes(ship)) {
      alert('You have already selected that pilot');
      return;
    }

    this.setState((prevState) => ({
      squadShips: [...prevState.squadShips, ship]
    }));
  }

  removeFromSquad = (idx) => {
    this.setState((prevState) => {
      const squadShips = [...prevState.squadShips];
      squadShips.splice(idx,1);

      return { squadShips: squadShips };
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>X-Wing Squad Builder</h1>
        <ShipsPanel ships={rebelShips} selectedShips={this.state.squadShips} onAddToSquad={this.addToSquad} />
        <SquadPanel ships={this.state.squadShips} onRemoveFromSquad={this.removeFromSquad} />
      </div>
    );
  }
}
