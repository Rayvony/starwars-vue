<template>
  <SearchBar type="character" @search-success="handleSearchSuccess"/>
  <div class="cardContainer">
    <div v-for="cardData in getAllCharacters" :key="cardData.id">
      <CardComponent>
        <router-link :to="`/details/character/${cardData.id}`">
          <img :src="cardData.img" :alt="cardData.name" />
        </router-link>
          <h3>{{ cardData.name }}</h3>
        <div class="cardButtons">
          <span @click="removeCharacter(cardData.id)" class="material-symbols-rounded">delete</span>
          <span @click="handleFavorite(cardData)" class="material-symbols-rounded">favorite</span>
        </div>
      </CardComponent>
    </div>
  </div>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useStore } from 'vuex';

const { getAllCharacters, getAllFavorites} = useStore().getters;
const { commit } = useStore();

const handleSearchSuccess = (searchData) => {
  if (isDuplicate(searchData)) return alert('Already added!');
  store.commit('addCharacter', searchData); 
};

const isDuplicate = (searchData) => {
  const characters = store.getters.getAllCharacters;
  return characters.some(item => item.id === searchData.id);
};

const removeCharacter = (id) => {
  commit('removeCharacter', id );
};

const handleFavorite = (cardData) => {
  const favorites = getAllFavorites;
  const isFavorite = favorites.some(favorite => favorite.id === cardData.id);

  if (isFavorite) {
    commit('removeFavorite', cardData.id);
  } else {
    commit('addFavorite', cardData);
  }
};

</script>

<style>
.cardContainer {
  margin-top: 1.2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2%;
}

.cardButtons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  padding-bottom: 10px;
}

.cardButtons .material-symbols-rounded{
  transition: all 0.02s;
}

.cardButtons .material-symbols-rounded:hover{
  transform: scale(1.2);
  color: red;
}

.material-symbols-rounded {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
