import React from 'react';
import ShipCard from './ShipCard'

export default class SquadPanel extends React.Component {
    render() {
        const { ships, onRemoveFromSquad } = this.props;
        const shipCards = ships.map((ship, i) => <ShipCard ship={ship} onRemoveFromSquad={onRemoveFromSquad} idx={i} key={i} />);
        const pointTotal = ships.reduce((total, ship) => total + ship.points, 0);
        return <div className="panel squad-panel">
            <div className="squad-panel-name">
                <span className="label">Squad Name:</span>

            </div>
            <div className="squad-panel-points-total">
                <span className="label">Squad Points: </span>
                {pointTotal}/200
            </div>
            <div className="squad-panel-ship-list">
                {shipCards}
            </div>
        </div>
    }
}