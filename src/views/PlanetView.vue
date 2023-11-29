<template>
  <SearchBar type="planet" @search-success="handleSearchSuccess"/>
  <div class="cardContainer">
    <div v-for="cardData in store.getters.getAllPlanets" :key="cardData.id">
      <CardComponent>
        <div class="imgcontainer">
        <router-link @click="handleDetail" :to="`/details/planet/${cardData.originalId}`">
          <img :src="cardData.img" :alt="cardData.name" />
        </router-link>
        </div>
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
  const characters = store.getters.getAllPlanets;
  return characters.some(item => item.originalId === searchData.originalId);
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

const handleDetail = (cardData) => {
  emit('detailSuccess', cardData);
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