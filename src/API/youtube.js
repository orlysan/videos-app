import axios from 'axios';

const KEY = 'AIzaSyDTjvF1d4vCydIo2ba_E1ATYt-ru-XEpyU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});