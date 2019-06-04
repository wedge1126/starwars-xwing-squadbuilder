import React from 'react';

export default class PilotList extends React.Component {
    render() {
        const shiptype = this.props.shiptype;
        const pilotCards = shiptype.pilots.map((pilot, i) => <div key={i}>{pilot.pilot}</div>);
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