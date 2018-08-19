import React, {Component} from 'react';
import Graph from '../components/selector'
import HistoryTable from '../components/HistoryTable'


export default class MainView extends Component {

    render() {
        return (
            <div>
                <Graph/>
                <HistoryTable/>
            </div>
        )
    }
}