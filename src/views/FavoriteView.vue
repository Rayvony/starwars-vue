<template>
  <div class="favorites">
    <div class="cardContainer">
      <div v-for="favorite in favorites" :key="favorite.id" @click="removeFavorite(favorite.id)">
        <CardComponent :character="favorite">
          <img :src="favorite.img" :alt="favorite.name" />
          <h3>{{ favorite.name }}</h3>
        </CardComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import CardComponent from '@/components/CardComponent.vue';

const store = useStore();

const favorites = store.getters.getAllFavorites;

const removeFavorite = (id) => {
  store.commit('removeFavorite', id);
};
</script>

<style>
/* Estilos para tu componente FavoriteView */
</style>
