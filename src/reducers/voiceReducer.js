import { INITIALISE_VOICE } from '../actions/types';

const INITIAL_STATE = {
	SYNTH: null,
	utterance: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INITIALISE_VOICE:
			// const SYNTH = window.speechSynthesis;
			// const utterance = new SpeechSynthesisUtterance();
			// const voice = SYNTH.getVoices().filter(function(voice) {
			// 	return voice.lang === 'hi-IN';
			// })[0];

			// utterance.voice = voice;
			// utterance.rate = 0.75;
			// utterance.volume = 0.8;
			// return { ...state, SYNTH, utterance };
			return { ...state };

		default:
			return state;
	}
};
