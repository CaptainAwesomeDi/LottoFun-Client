import React, {Component} from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'
import {connect} from 'react-redux'
import moment from 'moment'
import {CustomDatePicker} from '../components/CustomDatePicker'

export default class Submit extends Component {

  render (){
    return (
    <Form>
      <FormGroup>
        <Label for="date">日期</Label>
        <CustomDatePicker/>
        <Button>Submit</Button>
      </FormGroup>
    </Form>
    )
  }
}