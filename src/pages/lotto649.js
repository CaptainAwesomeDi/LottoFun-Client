import React, {Component, Fragment} from 'react'
import Graph from '../components/selector'
import HistoryTable from '../components/HistoryTable'

export default class Lotto649 extends Component {
    constructor(props){
        super(props)
        this.state = {
            "index":6,
            "bonus":1,
            "data": []
        }
    }

    render(){
        const setOfNumbers = this.state.index
        const bonus = this.state.bonus
        const data = this.state.data
        return(
            <Fragment>
                <Graph/>
                <HistoryTable setOfNumbers={setOfNumbers} bonus={bonus} {...data}/>
            </Fragment>
        )
    }
}
