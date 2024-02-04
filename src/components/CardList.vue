
<script setup>
  import CardItem from './CardItem.vue'
  const emit = defineEmits(['addToFavorite', 'addToCart'])
  defineProps({
    items: Array,
  })

</script>

<template>
      <div class="card_item-all" v-auto-animate>

        <CardItem 
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title" 
        :imageUrl="item.imageUrl" 
        :price="item.price" 
        :OnClickFavorite="() => emit('addToFavorite', item)"
        :OnClickAdd="() => emit('addToCart', item)"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
        />

      </div>
</template>