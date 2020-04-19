import axios from 'axios';
const KEY = 'AIzaSyDt5H3wok_CNvIwMBBE3uS9v8kE1haeBjA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
