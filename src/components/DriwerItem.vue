<script setup>
  const emit = defineEmits(['onClickRemove'])
  defineProps({
        cart: Array,
        id: Number,
        price: Number,
        title: String,
        imageUrl: String,
    })

</script>

<template>
    <div class="driwer_item" v-auto-animate>
        <img :src="imageUrl" alt="">
        <div class="driwer_item-mid">
            <p>{{ title }}</p>
            <p>{{ price }} руб.</p>
        </div>
        <img src="/krest.svg" alt="" @click="emit('onClickRemove')">
    </div>
</template>

<style>
.driwer_item {
    
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    display: flex;
    gap: 20px;
    padding: 20px;
    align-items: center;
    background: #FFF;
}
.driwer_item img:nth-child(1) {
    width: 70px;
    height: 70px;
}
.driwer_item-mid {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.driwer_item-mid p:nth-child(1) {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    max-width: 150px;
    line-height: normal;
}
</style>