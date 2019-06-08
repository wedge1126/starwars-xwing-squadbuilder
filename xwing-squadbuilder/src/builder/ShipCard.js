import React from 'react';
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
                        <span class="tooltiptext">Attack</span>
                    </span>
                    <span className="stat stats-agility tooltip">
                        <FontAwesomeIcon icon={faShare} /> {ship.agility}
                        <span class="tooltiptext">Agility</span>
                    </span>
                    <span className="stat stats-hull tooltip">
                        <FontAwesomeIcon icon={faTh} /> {ship.hull}
                        <span class="tooltiptext">Hull</span>
                    </span>
                    <span className="stat stats-shields tooltip">
                        <FontAwesomeIcon icon={faFutbol} /> {ship.shields}
                        <span class="tooltiptext">Shields</span>
                    </span>
                    {ship.force && 
                        <span className="stat stats-force tooltip">
                            <FontAwesomeIcon icon={faJedi} /> {ship.force}
                            <span class="tooltiptext">Force</span>
                        </span> 
                    }
                </div>
            </div>
        </div>
    }
}