import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PilotListItem extends React.Component {
    render() {
        const pilot = this.props.pilot;
        return <div className="pilot-list-item">
            <div className="pilot-list-item-cost">
                ({pilot.points})
                <FontAwesomeIcon className="pilot-list-item-add" icon={['fas', 'plus']} />
            </div>
            <span className="pilot-list-item-name">{pilot.pilot}</span>
        </div>
    }
}