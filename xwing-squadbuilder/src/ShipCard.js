import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faShare, faTh, faFutbol, faTimes, faJedi } from '@fortawesome/free-solid-svg-icons';

export default class ShipCard extends React.Component {
    render() {
        const { ship, onRemoveFromSquad, idx } = this.props;
        return <div className="ship-card">
            <div className="ship-card-header">
                <div className="ship-card-initiative">
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
                    <span className="stat ship-card-stats-attack">
                        <FontAwesomeIcon icon={faMeteor} /> {ship.attack}
                    </span>
                    <span className="stat ship-card-stats-agility">
                        <FontAwesomeIcon icon={faShare} /> {ship.agility}
                    </span>
                    <span className="stat ship-card-stats-hull">
                        <FontAwesomeIcon icon={faTh} /> {ship.hull}
                    </span>
                    <span className="stat ship-card-stats-shields">
                        <FontAwesomeIcon icon={faFutbol} /> {ship.shields}
                    </span>
                    {ship.force && 
                        <span className="stat ship-card-stats-force">
                            <FontAwesomeIcon icon={faJedi} /> {ship.force}
                        </span> 
                    }
                </div>
            </div>
        </div>
    }
}