import {SELECT_DATE} from '../constants/index'

const initState = {selected_date:""}

const customDatePickerReducer = (state = initState, action) => {
  if (action.type === SELECT_DATE) {
    return ({
      selected_date: action.selected_date
    })
  } else {
    return state;
  }
}

export {customDatePickerReducer}