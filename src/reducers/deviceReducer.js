import { SET_DEVICE } from '../actions/types';

const device = null;

export default (state = device, action) => {
	switch (action.type) {
		case SET_DEVICE:
			return action.payload;

		default:
			return state;
	}
};
