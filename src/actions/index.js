import { INITIALISE_VOICE, SET_DEVICE } from './types';

export const initialiseVoice = () => {
	return {
		type: INITIALISE_VOICE
	};
};

// set Device
export const setDevice = (data) => (dispatch) => {
	dispatch({ type: SET_DEVICE, payload: data });
};
