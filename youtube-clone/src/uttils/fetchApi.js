import axios from "axios";

const API_KEY = 'AIzaSyCfszZfvMGVKlGEEG4YSadrVjFt2Jdmm64'; // Make sure your API key is secured
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchApiForYoutubeData = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
            params: {
                ...params,
                key: API_KEY,
            },
        });
        console.log('your fetching data:', response.data); // Corrected logging
        return response.data;
    } catch (error) {
        console.log('Error fetching YouTube data:', error);
    }
};
