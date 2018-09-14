import {TOGGLE_NUMBER} from './actions'

let intitalState = {
  selected_number:[2,5],

}

const gridSelectorReducer = (state = intitalState, action) => {
  switch (action.type){
    default:
      return state
    case TOGGLE_NUMBER:
      if (state.selected_number.includes(action.selected_number)){
        let originState = state.selected_number
        let newArray = originState.filter((number)=>number!==action.selected_number)
        return {...state,selected_number:newArray}
      } else {
        let newState = [...state.selected_number,action.selected_number]
        return {...state,selected_number:newState}
      }
  }
}

export {gridSelectorReducer}