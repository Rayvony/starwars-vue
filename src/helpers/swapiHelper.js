import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const SWAPI_BASE_URL = "https://swapi.dev/api";
const DEFAULT_IMAGE_URL = "https://starwars-visualguide.com/assets/img/placeholder.jpg";

const getThingById = async (id, type) => {
  try {
    let imgType = type;
    if (type === "people") imgType = "characters";

    const { data } = await axios.get(`${SWAPI_BASE_URL}/${type}/${id}/`);

    const img = `https://starwars-visualguide.com/assets/img/${imgType}/${id}.jpg`;
    const uniqueId = uuidv4();

    // Validate the image URL by making a HEAD request
    const imageExists = await axios
      .head(img)
      .then(() => true)
      .catch(() => false);

    if (!imageExists) {
      // Use default image URL if the image doesn't exist or returns an error
      return { ...data, id: uniqueId, originalId: id, img: DEFAULT_IMAGE_URL, type: type };
    }

    return { ...data, id: uniqueId, originalId: id, img: img, type: type };
  } catch (error) {
    console.error(`Error fetching ${type} data`, error);
    const uniqueId = uuidv4();
    return { id: uniqueId, originalId: id, img: DEFAULT_IMAGE_URL, type: type };
  }
};

export { getThingById };
