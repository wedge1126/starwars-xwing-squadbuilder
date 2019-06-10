import React from 'react';
import PropTypes from 'prop-types';
import './PrintView.css';
import PrintShip from './PrintShip';

export default class PrintView extends React.Component {
    render() {
        const { squadName, pointTotal, selectedShips } = this.props.location.state;
        const shipCards = selectedShips.map((ship, i) => <PrintShip ship={ship} key={i} />);
        return <div className="print-view">
            <h1 className="print-view-squad-name">{squadName}</h1>
            <div className="print-view-squad-points">{pointTotal} points</div>
            <div className="print-view-ship-list" >{shipCards}</div>
        </div>
    }

    componentDidMount() {
        document.body.classList.add('printer-friendly');
    }

    componentWillUnmount() {
        document.body.classList.remove('printer-friendly');
    }
}

PrintView.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            squadName: PropTypes.string,
            pointTotal: PropTypes.number.isRequired,
            selectedShips: PropTypes.arrayOf(PropTypes.shape({
                initiative: PropTypes.number.isRequired,
                pilot: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                points: PropTypes.number.isRequired,
                attack: PropTypes.number.isRequired,
                agility: PropTypes.number.isRequired,
                hull: PropTypes.number.isRequired,
                shields: PropTypes.number.isRequired,
                force: PropTypes.number
            })).isRequired
        })
    })
};