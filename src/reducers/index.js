import { combineReducers } from 'redux'
import voiceReducer from './voiceReducer'
import displayReducer from './displayReducer'

export default combineReducers({
	voice: voiceReducer,
	display: displayReducer
})
