import { INITIALISE_VOICE } from '../actions/types';

const INITIAL_STATE = {
	src: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INITIALISE_VOICE:
			const src = action.payload;
			return { ...state, src };

		default:
			return state;
	}
};
