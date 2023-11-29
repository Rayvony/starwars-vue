import axios from "axios";

const SWAPI_BASE_URL = "https://swapi.dev/api";

const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
    const img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    return { ...data, id: id, img: img, type: "character" };
  } catch (error) {
    console.error("Error fetching character data", error);
  }
};

const getShipById = async (id) => {
  try {
    const { data } = await axios.get(`${SWAPI_BASE_URL}/starships/${id}/`);
    const img = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    return { ...data, id: id, img: img, type: "ship" };
  } catch (error) {
    console.error("Error fetching ship data", error);
  }
};

const getPlanetById = async (id) => {
  try {
    const { data } = await axios.get(`${SWAPI_BASE_URL}/planets/${id}/`);
    const img = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    return { ...data, id: id, img: img, type: "planet" };
  } catch (error) {
    console.error("Error fetching planet data", error);
  }
};

export { getCharacterById, getShipById, getPlanetById };
