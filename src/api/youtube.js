import Axios from "axios";

const KEY = 'AIzaSyCDj6LeEgIZ55H4ZZGprISSKKY5YP2l-mM'
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export default Axios.create({
    baseURL: baseUrl,
    params: {
        key:KEY,
        part: 'snippet',
        maxResult: 5
    }
})