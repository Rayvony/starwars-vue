import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";

const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
    return data;
  } catch (error) {
    console.error("Error fetching character data", error);
  }
};

const getShipById = async (id) => {
  try {
    const { data } = await axios.get(`${SWAPI_BASE_URL}/starship/${id}/`);
    return data;
  } catch (error) {
    console.error("Error fetching ship data", error);
  }
};

const getPlanetById = async (id) => {
  try {
    const { data } = await axios.get(`${SWAPI_BASE_URL}/planet/${id}/`);
    return data;
  } catch (error) {
    console.error("Error fetching planet data", error);
  }
};

export { getCharacterById, getShipById, getPlanetById };
