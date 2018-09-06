import {
  SELECT_DATE,
  SELECT_GAME_TYPE
} from '../constants/index'

const initState = {
  selected_date:"",
  game_type:"Lotto Max",
}

const customDatePickerReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
    case SELECT_DATE:
      return ({...state,
        selected_date:action.selected_date})
    case SELECT_GAME_TYPE:
      return ({...state,
        game_type: action.game_type})
  }
}


export {customDatePickerReducer}