<template>
  <SearchBar type="character" @search-success="handleSearchSuccess"/>
  <div class="cardContainer">
    <div v-for="cardData in cardComponentsData" :key="cardData.id">
      <CardComponent>
      <router-link :to="`/details/character/${cardData.id}`">
        <img :src="cardData.img" :alt="cardData.name" />
        <h3>{{ cardData.name }}</h3>
      </router-link>
      </CardComponent>
    </div>
  </div>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';
import SearchBar from '@/components/SearchBar.vue';
import { ref } from 'vue';

const cardComponentsData = ref([{
  name: "Luke Skywalker",
  id: "1",
  img: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
},
{
  name: "C3-P0",
  id: "2",
  img: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
},

]);

const handleSearchSuccess = (searchData) => {
  if (isDuplicate(searchData)) return alert('Already added!');
  cardComponentsData.value.push(searchData);
};

const isDuplicate = (searchData) => {
  return cardComponentsData.value.some(item => item.id === searchData.id);
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
</style>
