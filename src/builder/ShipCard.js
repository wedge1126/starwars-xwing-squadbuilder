import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faShare, faTh, faFutbol, faTimes, faJedi } from '@fortawesome/free-solid-svg-icons';

export default class ShipCard extends React.Component {
    render() {
        const { ship, onRemoveFromSquad, idx } = this.props;
        return <div className="ship-card">
            <div className="ship-card-header">
                <div className="stats-initiative ship-card-initiative">
                    {ship.initiative}
                </div>
                <div>
                    <span className="ship-card-pilot-name">
                        {ship.pilot}
                    </span>
                    <span className="ship-card-ship-type">
                        {ship.type}
                    </span>
                </div>
                <div className="ship-card-point-cost">
                    ({ship.points})
                </div>
                <div className="ship-card-remove">
                    <FontAwesomeIcon className="button" onClick={() => onRemoveFromSquad(idx)} icon={faTimes} />
                </div>
            </div>
            <div className="ship-card-body">
                <div className="ship-card-stats">
                    <span className="stat stats-attack tooltip">
                        <FontAwesomeIcon icon={faMeteor} /> {ship.attack}
                        <span className="tooltiptext">Attack</span>
                    </span>
                    <span className="stat stats-agility tooltip">
                        <FontAwesomeIcon icon={faShare} /> {ship.agility}
                        <span className="tooltiptext">Agility</span>
                    </span>
                    <span className="stat stats-hull tooltip">
                        <FontAwesomeIcon icon={faTh} /> {ship.hull}
                        <span className="tooltiptext">Hull</span>
                    </span>
                    <span className="stat stats-shields tooltip">
                        <FontAwesomeIcon icon={faFutbol} /> {ship.shields}
                        <span className="tooltiptext">Shields</span>
                    </span>
                    {ship.force && 
                        <span className="stat stats-force tooltip">
                            <FontAwesomeIcon icon={faJedi} /> {ship.force}
                            <span className="tooltiptext">Force</span>
                        </span> 
                    }
                </div>
            </div>
        </div>
    }
}

ShipCard.propTypes = {
    ship: PropTypes.shape({
        initiative: PropTypes.number.isRequired,
        pilot: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        points: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        agility: PropTypes.number.isRequired,
        hull: PropTypes.number.isRequired,
        shields: PropTypes.number.isRequired,
        force: PropTypes.number
    }).isRequired,
    onRemoveFromSquad: PropTypes.func.isRequired,
    idx: PropTypes.number.isRequired
};