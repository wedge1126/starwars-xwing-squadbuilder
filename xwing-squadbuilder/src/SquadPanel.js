import React from 'react';
import ShipCard from './ShipCard'

export default class SquadPanel extends React.Component {
    render() {
        const { ships, onRemoveFromSquad } = this.props;
        const shipCards = ships.map((ship, i) => <ShipCard ship={ship} onRemoveFromSquad={onRemoveFromSquad} idx={i} key={i} />);
        const pointTotal = ships.reduce((total, ship) => total + ship.points, 0);
        const pointsClasses = 'squad-panel-points' 
            + (pointTotal > 200 ? ' squad-panel-points-total-over' : '');

        return <div className="panel squad-panel">
            <div className="squad-panel-header">
                <div className="squad-panel-name">
                    <span className="label">Squad Name:</span>
                    <input type="text" name="squad-name" />
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