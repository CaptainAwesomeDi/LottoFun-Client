import React, {Component} from 'react'
import {Table} from 'reactstrap';

class HistoryTable extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const fakeData = [
            ["2018-08-18",1,2,3,4,5,6],
            ["2018-08-19",6,5,4,3,2,1],
        ]
        const dataRows = fakeData.map((entry)=>{
            console.log(entry)
            return (
                <RenderRow key={entry[0]}
                dateHistory={entry[0]}
                number1={entry[1]}
                number2={entry[2]}
                number3={entry[3]}
                number4={entry[4]}
                number5={entry[5]}
                specialnum={entry[6]}/>
            )
        })
        return (
            <Table striped >
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>特殊号码</th>
                    </tr>
                </thead>
                <tbody>
                    {dataRows}
                </tbody>
            </Table>
        );
    }
}

const RenderRow = (props) => {
    console.log(props.dateHistory);
    return (
        <tr>
            <th scope="row">{props.dateHistory}</th>
            <th>{props.number1}</th>
            <th>{props.number2}</th>
            <th>{props.number3}</th>
            <th>{props.number4}</th>
            <th>{props.number5}</th>
            <th>{props.specialnum}</th>
        </tr>
    )
}

export default HistoryTable;