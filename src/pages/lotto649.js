import React, {Component, Fragment} from 'react'
import Graph from '../components/selector'
import HistoryTable from '../components/HistoryTable'

export default class Lotto649 extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const fakeData = [
            {
                'id':1,
                'date':'2018-08-19',
                'numbers':[1,2,3,4,5,6,7],
                'bonus': 2,
            },
            {
                'id':2,
                'date':'2018-08-20',
                'numbers':[11,2,3,4,5,6,7],
                'bonus': 2
            }]
        return(
            <Fragment>
                <Graph type={'lotto649'} data={'somefakeshit'}/>
                <HistoryTable type={'lotto649'} data={fakeData}/>
            </Fragment>
        )
    }
}
