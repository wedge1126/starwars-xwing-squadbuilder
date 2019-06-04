import React from 'react';
import PilotListItem from './PilotListItem';

export default class PilotList extends React.Component {
    render() {
        const shiptype = this.props.shiptype;
        const pilotCards = shiptype.pilots.map((pilot, i) => <PilotListItem pilot={pilot} key={i} />);
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