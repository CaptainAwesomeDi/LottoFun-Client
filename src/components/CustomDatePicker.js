import React, { Component } from 'react'
import {FormGroup, Label, Input} from 'reactstrap'
import moment from 'moment'

export default class CustomDatePicker extends Component {
  constructor(props) {
    super(props)
    // this.state={

    // }
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
          <Input type='select' name='select' id='dateSelect'>
            {showLottoMaxSelect}
          </Input>
      </FormGroup>
    )
  }
}
