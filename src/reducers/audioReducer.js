import { SET_AUDIO_SRC } from '../actions/types'

const INITIAL_STATE = {
	src: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_AUDIO_SRC:
			const src = action.payload
			return { ...state, src }

		default:
			return state
	}
}
