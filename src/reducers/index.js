import { combineReducers } from 'redux'
import deviceReducer from './deviceReducer'
import audioReducer from './audioReducer'

export default combineReducers({
	device: deviceReducer,
	audio: audioReducer
})
