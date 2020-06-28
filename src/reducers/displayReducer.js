import { SET_SELECTED_CATEGORY, SET_SELECTED_SUB_CATEGORY } from '../actions/types'

const INITIAL_STATE = {
	selectedCategory: null,
	selectedSubCategory: null
}

export default (state = INITIAL_STATE, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_SELECTED_CATEGORY:
			return { ...state, selectedCategory: payload }

		case SET_SELECTED_SUB_CATEGORY:
			return { ...state, selectedSubCategory: payload }

		default:
			return state
	}
}
