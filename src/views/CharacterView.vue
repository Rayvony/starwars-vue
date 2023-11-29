<template>
  <SearchBar type="character" @search-success="handleSearchSuccess"/>
  <div class="cardContainer">
    <div v-for="cardData in store.getters.getAllCharacters" :key="cardData.id">
      <CardComponent>
        <router-link @click="handleDetail" :to="`/details/character/${cardData.originalId}`">
          <img :src="cardData.img" :alt="cardData.name" />
        </router-link>
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
const emit = defineEmits(['detailSuccess']);

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

const handleDetail = (cardData) => {
  emit('detailSuccess', cardData);
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
  cursor:pointer
}

.favorite-icon {
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
