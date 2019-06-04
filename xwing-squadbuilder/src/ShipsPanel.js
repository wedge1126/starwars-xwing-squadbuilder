import React from 'react';
import PilotList from './PilotList';

export default class ShipsPanel extends React.Component {
    render() {
        const ships = this.props.ships;
        const pilotLists = ships.map((shipType, i) => <PilotList shiptype={shipType} key={i} />)
        return <div className="panel ships-panel">
            {pilotLists}
        </div>
    }
}