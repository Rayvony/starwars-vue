<template>
    <div>
        <input type="text" :placeholder="`Search for a ${type}`" v-model="searchInput" @keyup.enter="search">
        <button @click="search">Search</button>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {getCharacterById, getPlanetById, getShipById} from '@/helpers/swapiHelper.js';

const props = defineProps({
    type: String
});

const emit = defineEmits(['SearchSuccess']);

let searchInput = ref('');

const search = async () => {
    let searchData;
    switch (props.type) {
        case 'character':
            searchData = await getCharacterById(searchInput.value);
            
            break;
        
        case 'starship':
            searchData = await getShipById(searchInput.value);
            
            break;
        
        case 'planet':
            searchData = await getPlanetById(searchInput.value);
            
    default:
        break;
    }
    
    if (searchData) {
        emit('SearchSuccess', searchData);
    }
}

</script>

<style scoped>

</style>