<template>
  <div @detailSuccess="handleDetailSuccess" class="detail">
    <h3>{{ detail.name }}</h3>
    <img :src="detail.img" :alt="detail.name">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const detail = ref({
  name: '',
  img: ''
});

const handleDetailSuccess = (cardData) => {
    detail.value = cardData;
};

onMounted(handleDetailSuccess(cardData))
</script>

<style scoped>
</style>