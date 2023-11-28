<template>
    <div>
        <input type="text" :placeholder="`Search for a ${type}`" v-model="searchInput">
        <button @click="search">Search</button>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {getCharacterById, getPlanetById, getShipById} from '@/helpers/swapiHelper.js';

const props = defineProps({
    type: String
});

let searchInput = ref('');

const search = async () => {
    switch (type) {
        case 'character':
            const character = await getCharacterById(searchInput.value);
            console.log(character);     
            break;
        
        case 'starship':
            const starship = await getShipById(searchInput.value);
            console.log(starship);
            break;
        
        case 'planet':
            const planet = await getPlanetById(searchInput.value);
            console.log(planet);
    default:
        break;
    }
}

</script>