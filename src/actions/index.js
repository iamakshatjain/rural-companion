import { SET_AUDIO_SRC, SET_DEVICE } from './types';

export const setAudioSrc = (src) => (dispatch) => {
  dispatch({ type: SET_AUDIO_SRC, payload: src });
};

// set Device
export const setDevice = (data) => (dispatch) => {
  dispatch({ type: SET_DEVICE, payload: data });
};
