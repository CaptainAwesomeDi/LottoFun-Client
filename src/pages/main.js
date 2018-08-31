import React, {Component} from 'react';
// import Graph from '../components/selector'
// import HistoryTable from '../components/HistoryTable'
import Button from '../components/button'
import {increment} from '../actions/actions'
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        increment: num => dispatch(increment(num))
    }
}
const mapStateToProps = state => {
    return ({count: state.count})
}
class MainView extends Component {

    handleOnClick=(event)=>{
        this.props.increment(1)
    }

    render() {
        const {count} = this.props
        return (
            <div>
                这个是主页我还没想好怎么搞
                <Button onClick={this.handleOnClick} text={count}/>
            </div>
        )
    }
}

const Main = connect(mapStateToProps,mapDispatchToProps)(MainView)
export default Main