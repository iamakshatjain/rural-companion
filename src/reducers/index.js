import { combineReducers } from 'redux'
import deviceReducer from './deviceReducer'

export default combineReducers({
	device: deviceReducer
})
