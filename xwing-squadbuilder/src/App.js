import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faPlus,
  faMeteor,
  faShare,
  faTh,
  faFutbol,
  faJedi,
  faTimes,
  faAngleUp,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rebelShips from './data/rebel-ships.json'
import ShipsPanel from './ShipsPanel';
import SquadPanel from './SquadPanel';
import PrintView from './PrintView';

library.add(faPlus, faMeteor, faShare, faTh, faFutbol, faJedi, faTimes, faAngleUp, faAngleDown);

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
        <Router>
          <Switch>
            <Route exact path="/"
              render={(props) => <SquadBuilder 
                ships={rebelShips} 
                selectedShips={this.state.squadShips} 
                onAddToSquad={this.addToSquad} 
                onRemoveFromSquad={this.removeFromSquad} 
                {...props} /> } 
              />
            <Route exact path="/print" 
              render={(props) => <PrintView />}
              />
          </Switch>
        </Router>
      </div>
    );
  }
}

function SquadBuilder(props) {
  const { ships, selectedShips, onAddToSquad, onRemoveFromSquad } = props;
  return <div className="squad-builder">
    <h1>X-Wing Squad Builder</h1>
    <ShipsPanel ships={ships} selectedShips={selectedShips} onAddToSquad={onAddToSquad} />
    <SquadPanel selectedShips={selectedShips} onRemoveFromSquad={onRemoveFromSquad} />
  </div>;
};