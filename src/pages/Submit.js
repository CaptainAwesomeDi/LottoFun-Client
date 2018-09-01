import React, {Component} from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'
import DatePicker from 'react-datepicker'
import {connect} from 'react-redux'
import moment from 'moment'
import {CustomDatePicker} from '../components/CustomDatePicker'

import 'react-datepicker/dist/react-datepicker.css';
export default class Submit extends Component {
  constructor () {
    super()
  }
  render (){
    return (
    <Form>
      <FormGroup>
        <Label for="date">日期</Label>
        <DatePicker /*selected = {} onChange={} */ />
        <CustomDatePicker/>

      </FormGroup>
    </Form>
    )
  }
}