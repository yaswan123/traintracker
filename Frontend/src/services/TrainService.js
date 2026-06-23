import axios from "axios";

const API_URL = "http://localhost:8081";

export const searchTrain = (source, destination) => {
    return axios.get(
        `${API_URL}/trains/search?source=${source}&destination=${destination}`
    );
};

export const getStations = () => {
    return axios.get(`${API_URL}/stations`);
};

export const getTrainDetails = (id) => {
    return axios.get(`${API_URL}/train-details/${id}`);
};