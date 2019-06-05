import React from 'react';
import PilotListItem from './PilotListItem';

export default class PilotList extends React.Component {
    render() {
        const { shiptype, onAddToSquad, selectedShips } = this.props;
        const pilotCards = shiptype.pilots.map((pilot, i) => <PilotListItem pilot={pilot} active={!pilot.unique || !selectedShips.includes(pilot)} onAddToSquad={onAddToSquad} key={i} />);
        return <div className="pilot-list">
            <div className="pilot-list-ship-type">
                {shiptype.type}
            </div>
            <div className="pilot-list-pilots">
                {pilotCards}
            </div>
        </div>
    }
}