<script setup>
  import { onMounted, ref } from 'vue';

  import axios from 'axios'
  import CardList from '../components/CardList.vue'

  const favorites = ref([])

onMounted(async () => {
    try {
        const {data} = await axios.get('https://188cea64a1bef531.mokky.dev/favorites?_relations=items')
        favorites.value = data.map((obj) => obj.item)
    } catch(err) {
        console.log(err);
        
    }
})
</script>
<template>
    <div class="all_kross">
        <h1>Мои Закладки</h1>
    </div>
    <CardList :items="favorites"/>

    
</template>