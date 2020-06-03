import { combineReducers } from 'redux'
import voiceReducer from './voiceReducer'

export default combineReducers({
	voice: voiceReducer
})
