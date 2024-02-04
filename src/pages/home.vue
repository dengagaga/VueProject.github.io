<script setup>
  import { onMounted, ref, computed, reactive, watch } from 'vue';
  import axios from 'axios'
  import {inject} from 'vue'
  import CardList from '../components/CardList.vue'
  import MiAllKross from '../components/MiAllKross.vue'
  
  const items = ref([])
  const filters = reactive({
    sortBy: 'title',
    searchQuery: '', 
  })
  const { cart, addOneToCard, removeToCard} = inject('cart')
  const addToCart = (item) => {
    
    if(!item.isAdded) {
      addOneToCard(item)
    } else {
      removeToCard(item)
    }
    console.log(cart);
  }
  const onChangeQuery = event => {
    filters.sortBy = event.target.value
    
  }
  const onChangeSearch = event => {
    filters.searchQuery = event.target.value
  }

  const addToFavorite = async (item) => {
   try {
      if (!item.isFavorite) {
        const obj = {
            item_id: item.id,
        }
        item.isFavorite =  true
        const {data} = await axios.post(`https://188cea64a1bef531.mokky.dev/favorites`, obj)
        item.favoriteId = data.id
        console.log(data);
      } else {
        item.isFavorite =  false
        await axios.delete(`https://188cea64a1bef531.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null

      }
   } catch (err) {
    console.log(err);
   }
    
  }
  onMounted(async () => {
    const localCart = localStorage.getItem('cart')
    cart.value = localCart  ? JSON.parse(localCart) : []
   
    await fetchItems()
    await fetchFavorites()
    items.value = items.value.map((item) => ({
      ...item,
      isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
    }))
  })
  const fetchFavorites = async () => {
    try {
      const {data: favorites} = await axios.get(`https://188cea64a1bef531.mokky.dev/favorites`)
      items.value = items.value.map(item => {
        const favorite = favorites.find(favorite => favorite.item_id === item.id)
        if(!favorite) {
          return item
        }
        return {
          ...item,
          isFavorite: true,
          favoriteId: favorite.id,
        }
      })
    } catch(err) {
      console.log(err);
    }
  }

  const fetchItems = async () => {
    
    try {
        const params = {
          sortBy: filters.sortBy,
        }
        if(filters.searchQuery) {
          params.title = `*${filters.searchQuery}*`
        }
      const {data} = await axios.get(`https://188cea64a1bef531.mokky.dev/items`, {
        params
      })
      items.value = data.map((obj) => ({
        ...obj, 
        isFavorite: false, 
        favoriteId: null,
        isAdded: false,
      }))
    } catch(err) {
      console.log(err);
    }
  }
  watch(cart, () => {
    items.value = items.value.map((item) => ({
      ...item,
      isAdded: false
    }))
  })
  watch(filters, fetchItems)
</script>
<template>
      <MiAllKross 
      :onChangeQuery="onChangeQuery"
      :onChangeSearch="onChangeSearch"
       />
      <CardList 
      :items="items"
      @addToFavorite="addToFavorite"
      @addToCart="addToCart"
      />
</template>