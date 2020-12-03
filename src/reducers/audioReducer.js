import { SET_AUDIO_SRC, SET_MUTE_STATE } from '../actions/types';

const INITIAL_STATE = {
  src: '',
  muted: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUDIO_SRC:
      const src = action.payload;
      return { ...state, src };

    case SET_MUTE_STATE:
      const muted = action.payload;
      return { ...state, muted };

    default:
      return state;
  }
};
