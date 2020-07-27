import { SET_DEVICE } from './types'

// set Device
export const setDevice = (data) => (dispatch) => {
	dispatch({ type: SET_DEVICE, payload: data })
}
