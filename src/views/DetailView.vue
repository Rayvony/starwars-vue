<template>
  <div class="detail">
    <h3>{{ detail.name }}</h3>
    <img :src="detail.img" :alt="detail.name">
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const character = store.getters.getDetail;

const detail = ref({
  name: character.name,
  img: character.img,
});


</script>

<style scoped>
</style>