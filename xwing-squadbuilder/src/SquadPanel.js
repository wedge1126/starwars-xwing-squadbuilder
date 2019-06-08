import React from 'react';
import { Link } from 'react-router-dom';
import ShipCard from './ShipCard';

export default class SquadPanel extends React.Component {
    render() {
        const { selectedShips, onRemoveFromSquad } = this.props;
        const shipCards = selectedShips.map((ship, i) => <ShipCard ship={ship} onRemoveFromSquad={onRemoveFromSquad} idx={i} key={i} />);
        const pointTotal = selectedShips.reduce((total, ship) => total + ship.points, 0);
        const pointsClasses = 'squad-panel-points' 
            + (pointTotal > 200 ? ' squad-panel-points-total-over' : '');

        return <div className="panel squad-panel">
            <div className="squad-panel-header">
                <Link className="squad-panel-header-print-button button" to={'/print'}>Print View</Link>
                <div className="squad-panel-name">
                    <span className="label">Squad Name:</span>
                    <input className="squad-panel-header-name-input" type="text" name="squad-name" />
                </div>
                <div className={pointsClasses}>
                    <span className="label">Squad Points: </span>
                    <span className="squad-panel-points-total">{pointTotal}/200</span>
                </div>
            </div>
            <div className="squad-panel-ship-list">
                {shipCards}
            </div>
        </div>
    }
}