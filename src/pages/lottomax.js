import React,{Component,Fragment} from 'react'
import HistoryTable from '../components/HistoryTable'
import Graph from '../components/selector'
import {Link} from 'react-router-dom'
export default class LottoMax extends Component {
    render () {
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
                'numbers':[11,43,43,45,55,62,17],
                'bonus': 2
            }]
        return (
            <Fragment>
                <div>
                    <Graph type={'lottoMax'}data={fakeData}/>
                    <HistoryTable type={'lottoMax'} data={fakeData}/>
                </div>
                <div>
                    <Link to="/submit">添加新记录</Link>
                </div>
            </Fragment>
        )
    }
}