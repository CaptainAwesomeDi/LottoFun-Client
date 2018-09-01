import {INCREMENT,SELECT_DATE} from '../constants/index'
const increment = (num) => ({
    type: INCREMENT,
    count: num
})

const select_date = (date) => ({
    type: SELECT_DATE,
    selected_date: date
})
export {
    increment,
    select_date
}