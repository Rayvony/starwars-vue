<template>
  <SearchBar type="people" @search-success="handleSearchSuccess"/>
  <div class="cardContainer">
    <div v-for="cardData in store.getters.getAllCharacters" :key="cardData.id">
      <CardComponent>
        <div @click="handleDetail(cardData)">
          <img :src="cardData.img" :alt="cardData.name" />
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
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const handleSearchSuccess = (searchData) => {
  if (isDuplicate(searchData)) return alert('Already added!');
  store.commit('addCharacter', searchData); 
};

const isDuplicate = (searchData) => {
  const characters = store.getters.getAllCharacters;
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

const isFavorite = (id) => {
  const favorites = store.getters.getAllFavorites;
  return favorites.some(favorite => favorite.id === id);
};

const handleDetail = (cardData) => {
  store.commit('setDetail', cardData);
  router.push(`/details/people/${cardData.originalId}`);
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
