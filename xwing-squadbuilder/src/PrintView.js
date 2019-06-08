import React from 'react';
import './PrintView.css';

export default class PrintView extends React.Component {
    render() {
        return <div className="print-view">
            This is the print view.
        </div>
    }

    componentDidMount() {
        document.body.classList.add('print-view');
    }

    componentWillUnmount() {
        document.body.classList.remove('print-view');
    }
}
