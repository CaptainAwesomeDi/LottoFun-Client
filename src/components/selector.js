import React,{Component} from 'react';
import {Line} from 'react-chartjs-2'

class Graph extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const fakedata = {
            labels:["1","2","3","4"],
            datasets:[{
                label: "号码总和",
                data:[100,200,150,40],
                showLine:true
            }]
        }
        return (
            <Line data={fakedata} width={100} height={50}/>
        );
    }
}

export default Graph;