import React, { Component } from 'react'
import {FormGroup, Label, Input} from 'reactstrap'
import moment from 'moment'
import {connect} from 'react-redux'
import {select_date,select_game_type} from '../actions/actions'

const mapStateToProps = state => ({
  select_date: state.select_date,
  select_game_type: state.select_game_type,
})

const mapDispatchToProps = dispatch => ({
  select_date: date => dispatch(select_date(date)),
  select_game_type: game_type => dispatch(select_game_type(game_type)),
})

class MyCustomDatePicker extends Component {

  handleChange=(event)=> {
    console.log('going to handleChange',event.target.value)
    console.log(this.props)
    this.props.select_date(event.target.value)
  }

  handleGameChange=(event)=>{
    this.props.select_game_type(event.target.value)
    console.log("game_type_selected:",event.target.value)
  }

  render() {
    let MaxList = []
    let IteratorVaule
    this.props.game_type === 'Lotto Max'? IteratorVaule = 3 : IteratorVaule = 5
      // 3 presents Wednesday

    for (let i=0; i < 10000; i+=7 ) {
      MaxList.push(moment(Date.now(), "x").day(IteratorVaule+i).format('dddd MMM Do YY'))
    }
    const showLottoMaxSelect = MaxList.map(item=>(<option>{item}</option>))

    return (
      <FormGroup>
        {console.log(MaxList)}
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