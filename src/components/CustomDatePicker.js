import React, { Component } from 'react'
import {FormGroup, Label, Input} from 'reactstrap'
import moment from 'moment'
import {connect} from 'react-redux'
import {select_date,select_game_type} from '../actions/actions'

const mapStateToProps = state => ({
    selected_date: state.customDatePickerReducer.selected_date,
    game_type: state.customDatePickerReducer.game_type,
})

const mapDispatchToProps = dispatch => ({
  select_date: date => dispatch(select_date(date)),
  select_game_type: game_type => dispatch(select_game_type(game_type)),
})

class MyCustomDatePicker extends Component {

  handleChange=(event)=> {
    this.props.select_date(event.target.value)
  }

  handleGameChange=(event)=>{
    this.props.select_game_type(event.target.value)
  }

  render() {
    let MaxList = []
    for (let i=0; i < 10000; i+=7 ) {
      if (this.props.game_type === 'Lotto Max'){
        MaxList.push(moment(Date.now(), "x").day(5 + i).format('dddd MMM Do YY'))
      } else {
        MaxList.push(moment(Date.now(), "x").day(3 + i).format('dddd MMM Do YY'))
        MaxList.push(moment(Date.now(), "x").day(6 + i).format('dddd MMM Do YY'))
      }
    }
    const showLottoMaxSelect = MaxList.map(item=>(<option>{item}</option>))

    return (
      <FormGroup>
        {console.log(this.props)}
        <Label for='customDatePicker'>选择游戏类型</Label>
        <Input type='select' name='select' id='gameSelect' onChange={this.handleGameChange}>
          <option>Lotto Max</option>
          <option>Lotto 6/49</option>
        </Input>
        <Label for='customDatePicker'>选择输入日期号码</Label>
          <Input type='select' name='select' id='dateSelect' onChange={this.handleChange}>
            {showLottoMaxSelect}
          </Input>
      </FormGroup>
    )
  }
}

const CustomDatePicker = connect(mapStateToProps,mapDispatchToProps)(MyCustomDatePicker)

export {CustomDatePicker}