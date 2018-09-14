import React, {Component} from 'react';
import Button from '../components/button'
import {increment} from '../actions/actions'
import {connect} from 'react-redux'
import {GridSelector} from '../components/gridSelector/gridSelector'

const mapDispatchToProps = dispatch => {
    return {
        increment: num => dispatch(increment(num))
    }
}
const mapStateToProps = state => {
    console.log(state.count)
    return ({
        count: state.rootReducer.count
    })
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
                <GridSelector/>
            </div>
        )
    }
}

const Main = connect(mapStateToProps,mapDispatchToProps)(MainView)
export default Main