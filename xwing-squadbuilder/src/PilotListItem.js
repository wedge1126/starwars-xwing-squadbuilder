import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class PilotListItem extends React.Component {
    render() {
        const { pilot, onAddToSquad, active } = this.props;
        return <div className={'pilot-list-item' + (active ? '' : ' disabled')}>
            <div className="pilot-list-item-cost">
                ({pilot.points})
                <span className="pilot-list-item-add">
                    <FontAwesomeIcon onClick={() => active ? onAddToSquad(pilot) : {}} className="button" icon={['fas', 'plus']} />
                </span>
            </div>
            <span className="pilot-list-item-name">{pilot.pilot}</span>
        </div>
    }
}