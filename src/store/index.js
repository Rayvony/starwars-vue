import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [
      {
        name: "Luke Skywalker",
        id: "1",
        img: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
      },
      {
        name: "C3-PO",
        id: "2",
        img: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
      },
    ],
    starships: [
      {
        name: "Millenium Falcon",
        id: "10",
        img: "https://starwars-visualguide.com/assets/img/starships/10.jpg",
      },
      {
        name: "Y-wing",
        id: "11",
        img: "https://starwars-visualguide.com/assets/img/starships/11.jpg",
      },
    ],
    planets: [
      {
        name: "Alderaan",
        id: "2",
        img: "https://starwars-visualguide.com/assets/img/planets/2.jpg",
      },
      {
        name: "Yavin IV",
        id: "3",
        img: "https://starwars-visualguide.com/assets/img/planets/3.jpg",
      },
    ],
    favorites: [
      {
        name: "Luke Skywalker",
        id: "1",
        img: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
      },
    ],
  },
  mutations: {
    addCharacter(state, character) {
      switch (character.type) {
        case "character":
          state.characters.push(character);
          break;
        case "ship":
          state.starships.push(character);
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
      }
    },
    removeFavorite(state, id) {
      state.favorites = state.favorites.filter((character) => {
        return character.id !== id;
      });
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
  },
});
