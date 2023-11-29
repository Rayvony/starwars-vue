<template>
  <div class="favorites">
    <div class="cardContainer">
      <div v-for="favorite in favorites" :key="favorite.id" @click="removeFavorite(favorite.id)">
        <CardComponent :character="favorite">
        <div class="imgcontainer">
        <router-link @click="handleDetail" :to="`/details/${favorite.type}/${favorite.originalId}`">
          <img :src="favorite.img" :alt="favorite.name" />
        </router-link>
        </div>
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

const handleDetail = (cardData) => {
  emit('detailSuccess', cardData);
};
</script>

<style>
</style>
