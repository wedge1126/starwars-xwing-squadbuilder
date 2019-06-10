import React from 'react';
import PropTypes from 'prop-types';
import PilotList from './PilotList';

export default class ShipsPanel extends React.Component {
    render() {
        const { ships, onAddToSquad, selectedShips } = this.props;
        const pilotLists = ships.map((shipType, i) => <PilotList shiptype={shipType} selectedShips={selectedShips} onAddToSquad={onAddToSquad} key={i} />)
        return <div className="panel ships-panel">
            <div className="ships-panel-pilot-list">
                {pilotLists}
            </div>
        </div>
    }
}

ShipsPanel.propTypes = {
    ships: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        pilots: PropTypes.arrayOf(
            PropTypes.shape({
                pilot: PropTypes.string.isRequired,
                points: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired
            })
        ).isRequired
    })),
    onAddToSquad: PropTypes.func.isRequired,
    selectedShips: PropTypes.arrayOf(
        PropTypes.shape({
            initiative: PropTypes.number.isRequired,
            pilot: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            points: PropTypes.number.isRequired,
            attack: PropTypes.number.isRequired,
            agility: PropTypes.number.isRequired,
            hull: PropTypes.number.isRequired,
            shields: PropTypes.number.isRequired,
            force: PropTypes.number
        })
    )
};