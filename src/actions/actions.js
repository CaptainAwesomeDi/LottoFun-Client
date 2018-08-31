import {INCREMENT} from '../constants/index'
const increment = (num) => ({
    type: INCREMENT,
    count: num
})

export {
    increment,
}