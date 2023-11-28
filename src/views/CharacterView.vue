<template>
  <SearchBar type="character"/>
  <div class="cardContainer">
    <div v-for="cardData in CardComponentsData" :key="cardData.id">
    <CardComponent>
      <h3>{{cardData.name}}</h3>
      <img :src="buildImageUrl(cardData.id)" :alt="cardData.name" />
    </CardComponent>
    </div>
  </div>

</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';
import SearchBar from '@/components/SearchBar.vue';
import { ref } from 'vue';


const buildImageUrl = (id) => `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

</script>