import React from 'react';
import './PrintView.css';

export default class PrintView extends React.Component {
    render() {
        const { squadName, pointTotal, selectedShips } = this.props.location.state;
        return <div className="print-view">
            <div>{squadName}</div>
            <div>{pointTotal}</div>
            {JSON.stringify(selectedShips)}
        </div>
    }

    componentDidMount() {
        document.body.classList.add('print-view');
    }

    componentWillUnmount() {
        document.body.classList.remove('print-view');
    }
}
