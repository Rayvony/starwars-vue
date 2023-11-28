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
    favorites: [],
  },
  mutations: {
    addCharacter(state, character) {
      state.characters.push(character);
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
  },
});
