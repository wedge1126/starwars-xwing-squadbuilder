import React from 'react';
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