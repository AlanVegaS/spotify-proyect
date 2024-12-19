import axios from 'axios'

export const spotifyApi = axios.create({
    baseURL: 'https://auth-spotify.netlify.app/'
});