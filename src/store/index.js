import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    starships: [],
    planets: [],
    favorites: [],
    detail: {},
  },
  mutations: {
    addCharacter(state, character) {
      switch (character.type) {
        case "people":
          state.characters.push(character);
          break;
        case "starships":
          state.starships.push(character);
          break;
        case "planets":
          state.planets.push(character);
          break;
        default:
          console.error("Error adding character");
      }
    },
    removeCharacter(state, id) {
      state.characters = state.characters.filter((character) => {
        return character.id !== id;
      });
    },
    addFavorite(state, character) {
      const existingFavorite = state.favorites.find((favorite) => favorite.id === character.id);

      if (!existingFavorite) {
        state.favorites.push(character);
        console.log(state.favorites);
      }
    },
    removeFavorite(state, id) {
      state.favorites = state.favorites.filter((character) => {
        return character.id !== id;
      });
    },
    setDetail(state, character) {
      state.detail = character;
    },
  },
  actions: {},
  getters: {
    getAllCharacters(state) {
      return state.characters;
    },
    getAllFavorites(state) {
      return state.favorites;
    },
    getAllStarships(state) {
      return state.starships;
    },
    getAllPlanets(state) {
      return state.planets;
    },
    getDetail(state) {
      return state.detail;
    },
  },
});
