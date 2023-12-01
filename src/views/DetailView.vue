<template>
  <div class="detail">
    <h3 v-if="detail && detail.name">{{ detail.name }}</h3>
    <img :src="detail && detail.img" v-if="detail && detail.img" :alt="detail && detail.name">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getThingById } from '@/helpers/swapiHelper';

const router = useRouter();

const detail = ref({});

onMounted(async () => {
  const { type, id } = router.currentRoute.value.params;
  try {
    const character = await getThingById(id, type);
    detail.value = character;
  } catch (error) {
    console.error(`Error fetching ${type} data`, error);
  }
});
</script>

<style scoped>

</style>


