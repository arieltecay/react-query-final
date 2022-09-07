import axios from "axios";

const API = "http://localhost:3005"

export const getBandById = async (bandId) => {
    const { data } = await axios.get(`${API}/bandas/${bandId}`);
    return data;
};

export const getBands = async () => {
    const { data } = await axios.get(`${API}/bandas`);
    return data;
};

export const createNewBand = async (band) => {
    const { data } = await axios.post(`${API}/bandas`, band);
    return data;
};