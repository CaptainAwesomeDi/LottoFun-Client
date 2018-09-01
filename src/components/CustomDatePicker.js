import React, { Component } from 'react'
import {FormGroup, Label, Input} from 'reactstrap'
import moment from 'moment'
import {connect} from 'react-redux'
import {select_date} from '../actions/actions'

const mapStateToProps = state => ({
  select_date: state.select_date
})

// const mapDispatchToProps = dispatch => ({
//   select_date: date => dispatch(select_date(date))
// })

const mapDispatchToProps = dispatch => {
  return {
    select_date: date => dispatch(select_date(date))
  }
}
class MyCustomDatePicker extends Component {

  handleChange=(event)=> {
    console.log('going to handleChange',event.target.value)
    this.props.select_date(event.target.value)
  }

  render() {
    const WEDS = 3
    const FRI = 5
    let MaxList = []
    for (let i=0; i < 10000; i+=7 ) {
      MaxList.push(moment(Date.now(), "x").day(WEDS+i).format('dddd MMM Do YY'))
    }
    const showLottoMaxSelect = MaxList.map(item=>(<option>{item}</option>))


   // const fakeDates = [{},{}]
    //const mapFromStartDate
    return (
      <FormGroup>
        {console.log(MaxList)}
        <Label for='customDatePicker'>选择输入日期号码</Label>
          <Input type='select' name='select' id='dateSelect' onChange={this.handleChange}>
            {showLottoMaxSelect}
          </Input>
      </FormGroup>
    )
  }
}

const CustomDatePicker = connect(mapStateToProps,mapStateToProps)(MyCustomDatePicker)

export {CustomDatePicker}