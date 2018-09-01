import React, {Component, Fragment} from 'react'
import Graph from '../components/selector'
import HistoryTable from '../components/HistoryTable'
import HeatMap from '../components/heatMap'

export default class Lotto649 extends Component {

    render(){
        const fakeData = [
            {
                'id':1,
                'date':'2018-08-19',
                'numbers':[6,4,9,4,5,6],
                'bonus': 2,
            },
            {
                'id':2,
                'date':'2018-08-20',
                'numbers':[11,2,3,4,5,6],
                'bonus': 2
            }]
        return(
            <Fragment>
                <Graph type={'lotto649'} data={fakeData}/>
                <HistoryTable type={'lotto649'} data={fakeData}/>
                <HeatMap />
            </Fragment>
        )
    }
}
