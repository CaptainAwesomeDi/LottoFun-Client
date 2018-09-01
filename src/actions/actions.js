import {
    INCREMENT,
    SELECT_DATE,
    SELECT_GAME_TYPE,
} from '../constants/index'
const increment = (num) => ({
    type: INCREMENT,
    count: num
})

const select_date = (date) => ({
    type: SELECT_DATE,
    selected_date: date
})

const select_game_type = (game_type) => ({
    type: SELECT_GAME_TYPE,
    game_type
})
export {
    increment,
    select_date,
    select_game_type,
}