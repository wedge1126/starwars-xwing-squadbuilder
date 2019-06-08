import React from 'react';
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
