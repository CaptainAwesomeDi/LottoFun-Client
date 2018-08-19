import React,{Component,Fragment} from 'react'
import HistoryTable from '../components/HistoryTable'
import Graph from '../components/selector'
export default class LottoMax extends Component {
    render () {
        return (
            <Fragment>
                <Graph/>
                <HistoryTable/>
            </Fragment>
        )
    }
} 