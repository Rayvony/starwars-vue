<template>
  <SearchBar type="planet" @search-success="handleSearchSuccess"/>
  <div class="cardContainer">
    <div v-for="cardData in store.getters.getAllPlanets" :key="cardData.id">
      <CardComponent>
        <div class="imgcontainer">
        <router-link :to="`/details/planet/${cardData.id}`">
          <img :src="cardData.img" :alt="cardData.name" />
        </router-link>
        </div>
          <!-- <h4>Model:</h4>
          <p>{{ cardData.model }}</p>
          <h4>Crew:</h4>
          <p>{{ cardData.crew }}</p> -->
          <h3>{{ cardData.name }}</h3>
        <div class="cardButtons">
          <span @click="removeCharacter(cardData.id)" class="material-symbols-rounded">delete</span>
          <span @click="handleFavorite(cardData)" :class="{ 'material-symbols-rounded': true, 'favorite-icon': isFavorite(cardData.id) }">
            favorite
          </span>
        </div>
      </CardComponent>
    </div>
  </div>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useStore } from 'vuex';

const store = useStore();

const handleSearchSuccess = (searchData) => {
  if (isDuplicate(searchData)) return alert('Already added!');
  store.commit('addCharacter', searchData); 
};

const isDuplicate = (searchData) => {
  const characters = store.getters.getAllCharacters;
  return characters.some(item => item.id === searchData.id);
};

const removeCharacter = (id) => {
  store.commit('removeCharacter', id );
};

const handleFavorite = (cardData) => {
  
  const favorite = isFavorite(cardData.id);
  if (favorite) {
    store.commit('removeFavorite', cardData.id);
  } else {
    store.commit('addFavorite', cardData);
  }
};

const isFavorite = (id) => {
  const favorites = store.getters.getAllFavorites;
  return favorites.some(favorite => favorite.id === id);
};
</script>

<style scoped>
p {
  text-align: center;
  color: black;
}

h4 {
  color: black
}

</style>