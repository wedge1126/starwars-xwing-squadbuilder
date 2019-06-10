import React from 'react';
import PropTypes from 'prop-types';
import PilotListItem from './PilotListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class PilotList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        }
    }

    toggleExpanded = () => {
        this.setState((prevState) => ({
            expanded: !prevState.expanded
        }));
    };

    render() {
        const { shiptype, onAddToSquad, selectedShips } = this.props;
        const pilotCards = shiptype.pilots.map((pilot, i) => <PilotListItem pilot={pilot} visible={this.state.expanded} active={!pilot.unique || !selectedShips.includes(pilot)} onAddToSquad={onAddToSquad} key={i} />);
        const angle = this.state.expanded ? faAngleUp : faAngleDown;
        return <div className="pilot-list">
            <div className="pilot-list-ship-type" onClick={this.toggleExpanded}>
                <div>{shiptype.type}</div>
                <div><FontAwesomeIcon icon={angle} /></div>
            </div>
            <div className="pilot-list-pilots">
                {pilotCards}
            </div>
        </div>
    }
}

PilotList.propTypes = {
    shiptype: PropTypes.shape({
        type: PropTypes.string.isRequired,
        pilots: PropTypes.arrayOf(
            PropTypes.shape({
                pilot: PropTypes.string.isRequired,
                points: PropTypes.number.isRequired,
                type: PropTypes.string.isRequired
            })
        ).isRequired
    }),
    onAddToSquad: PropTypes.func.isRequired,
    selectedShips: PropTypes.arrayOf(
        PropTypes.shape({
            initiative: PropTypes.number.isRequired,
            pilot: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            points: PropTypes.number.isRequired,
            attack: PropTypes.number.isRequired,
            agility: PropTypes.number.isRequired,
            hull: PropTypes.number.isRequired,
            shields: PropTypes.number.isRequired,
            force: PropTypes.number
        })
    )
};