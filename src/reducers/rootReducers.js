import { INCREMENT } from '../constants/index'

const initialState = {count:0}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state
        case INCREMENT:
            console.log('state:',state)
            console.log('actions', action)
            return ({ count: action.count + state.count})
            
    }
}

export { rootReducer }