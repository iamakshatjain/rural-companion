import { INITIALISE_VOICE, SET_DEVICE } from './types';

export const initialiseVoice = (src) => (dispatch) => {
	dispatch({ type: INITIALISE_VOICE, payload: src });
};

// set Device
export const setDevice = (data) => (dispatch) => {
	dispatch({ type: SET_DEVICE, payload: data });
};
