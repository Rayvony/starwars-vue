import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    starships: [],
    planets: [],
    favorites: [],
    filters: [],
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
    filter(state, type, filter) {
      switch (type) {
        case "people":
          const filteredPeople = state.characters.filter((person) => {
            return person[filter.filter] === filter.param;
          });
          filteredPeople = state.filters;
        case "starships":
          const filteredStarships = state.starships.filter((starship) => {
            return starship[filter.filter] === filter.param;
          });
          filteredStarships = state.filters;
          break;
        case "planets":
          const filteredPlanets = state.planets.filter((planet) => {
            return planet[filter.filter] === filter.param;
          });
          filteredPlanets = state.filters;
          break;
        default:
          console.error("Error filtering");
      }
    },
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
    },
  },
});
