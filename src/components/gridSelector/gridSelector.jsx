import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggle_number} from './actions'


const mapStateToProps = state => ({
  selected_number:state.gridSelectorReducer.selected_number
})

const mapDispatchToProps = dispatch => ({
  toggle_number: number => dispatch(toggle_number(number))
})

class GridSelectorComponent extends Component {
  onClick=(event)=>{
    let button = document.getElementById('special')
    button.style.color = 'red'
    this.props.toggle_number(1)
  }
  render(){
    return <button onClick={this.onClick} id="special" style={{color:'black'}}> the number:{this.props.selected_number}</button>
  }
}

export const GridSelector = connect(mapStateToProps,mapDispatchToProps)(GridSelectorComponent)