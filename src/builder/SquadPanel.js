import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShipCard from './ShipCard';

export default class SquadPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleSquadNameChange = this.handleSquadNameChange.bind(this);
    }

    handleSquadNameChange(event) {
        this.props.onSquadNameChange(event.target.value);
    }

    render() {
        const { selectedShips, onRemoveFromSquad, squadName } = this.props;
        const shipCards = selectedShips.map((ship, i) => 
            <ShipCard ship={ship} onRemoveFromSquad={onRemoveFromSquad} idx={i} key={i} />);
        const pointTotal = selectedShips.reduce((total, ship) => total + ship.points, 0);
        const pointsClasses = 'squad-panel-points' 
            + (pointTotal > 200 ? ' squad-panel-points-total-over' : '');

        return <div className="panel squad-panel">
            <div className="squad-panel-header">
                <Link className="squad-panel-header-print-button button" to={{
                    pathname: '/print',
                    state: {
                        squadName: squadName,
                        pointTotal: pointTotal,
                        selectedShips: selectedShips
                    }}} >Print View</Link>
                <div className="squad-panel-name">
                    <span className="label">Squad Name:</span>
                    <input className="squad-panel-header-name-input" type="text" 
                        value={squadName} 
                        onChange={this.handleSquadNameChange} />
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

SquadPanel.propTypes = {
    selectedShips: PropTypes.arrayOf(PropTypes.shape({
        initiative: PropTypes.number.isRequired,
        pilot: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        points: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        agility: PropTypes.number.isRequired,
        hull: PropTypes.number.isRequired,
        shields: PropTypes.number.isRequired,
        force: PropTypes.number
    })).isRequired,
    onRemoveFromSquad: PropTypes.func.isRequired,
    squadName: PropTypes.string
};