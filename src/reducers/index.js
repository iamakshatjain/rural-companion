import { combineReducers } from 'redux';
import voiceReducer from './voiceReducer';
import deviceReducer from './deviceReducer';

export default combineReducers({
	voice: voiceReducer,
	device: deviceReducer
});
