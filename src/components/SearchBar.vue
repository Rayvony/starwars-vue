<template>
    <div>
        <input type="text" :placeholder="`Search for ${type}`" v-model="searchInput" @keyup.enter="search">
        <button @click="search">Search</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getThingById } from '@/helpers/swapiHelper.js';

const props = defineProps({
    type: String
});

const emit = defineEmits(['SearchSuccess']);

let searchInput = ref('');

const search = async () => {
    let searchData;
    searchData = await getThingById(searchInput.value, props.type);
    
    if (searchData) {
        emit('SearchSuccess', searchData);
    }
}

</script>

<style scoped>

</style>