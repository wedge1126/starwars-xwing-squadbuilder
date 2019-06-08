import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faShare, faTh, faFutbol, faJedi } from '@fortawesome/free-solid-svg-icons';

export default class PrintShip extends React.Component {
    render() {
        const { ship } = this.props;
        return <div className="print-ship-card">
            <div className="stats-initiative print-ship-initiative">
                    {ship.initiative}
            </div>
            <div className="print-ship-header">
                <div>
                    <span className="print-ship-pilot-name">
                        {ship.pilot}
                    </span>
                    -
                    <span className="print-ship-ship-type">
                        {ship.type}
                    </span>
                </div>
                <div className="print-ship-point-cost">
                    {ship.points} points
                </div>
            </div>
            <div className="print-ship-body">
                <div className="print-ship-stats">
                    <span className="stat stats-attack">
                        <FontAwesomeIcon icon={faMeteor} /> {ship.attack}
                    </span>
                    <span className="stat stats-agility">
                        <FontAwesomeIcon icon={faShare} /> {ship.agility}
                    </span>
                    <span className="stat stats-hull">
                        <FontAwesomeIcon icon={faTh} /> {ship.hull}
                    </span>
                    <span className="stat stats-shields">
                        <FontAwesomeIcon icon={faFutbol} /> {ship.shields}
                    </span>
                    {ship.force && 
                        <span className="stat stats-force">
                            <FontAwesomeIcon icon={faJedi} /> {ship.force}
                        </span> 
                    }
                </div>
            </div>
        </div>
    }
}