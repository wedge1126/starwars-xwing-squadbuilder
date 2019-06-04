import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ShipCard extends React.Component {
    render() {
        const ship = this.props.ship;
        return <div className="ship-card">
            <div className="ship-card-header">
                <div className="ship-card-initiative">
                    {ship.initiative}
                </div>
                <div className="ship-card-pilot-name">
                    {ship.pilot}
                </div>
                <div className="ship-card-point-cost">
                    {ship.points}
                </div>
            </div>
        </div>
    }
}