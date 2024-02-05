<script setup>

  defineProps({
        id: Number,
        price: Number,
        title: String,
        imageUrl: String,
        isFavorite: Boolean,
        isAdded: Boolean,
        OnClickFavorite: Function,
        OnClickAdd: Function,
    })

</script>

<template>
        <div class="item_all">
            <img @click="OnClickFavorite" class="item_all-svg" :src="!isFavorite ? '/VueProject.github.io/like-1.svg' : '/VueProject.github.io/like-2.svg'" alt="">
            <img  :src="imageUrl" alt="">
            <p>{{title}}</p>
            <div class="item_all-bot">
                <div class="item_all-bot-left">
                    <span>
                        Цена:
                    </span>
                    <p>
                        {{price}} руб.
                    </p>
                </div>
                <button>
                    <img @click="OnClickAdd" :src="!isAdded ? '/VueProject.github.io/plus.svg' : '/VueProject.github.io/checked.svg'" alt="">
                </button>
            </div>
        </div>
</template>
<style>
.item_all {
    margin-top: 40px;
    border-radius: 40px;
    border: 1px solid #F3F3F3;
    width: 100%;
    max-width: 240px;
    padding: 20px 40px 30px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    transition: .4s;
}
.item_all:hover {
    transform: scale(1.1);
    cursor: pointer;
}
.item_all-svg {
    position: absolute;
}
.item_all p{
    text-align: center;
    
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.item_all-bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item_all-bot-left span {
    color: #BDBDBD;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 5px;
}
.item_all-bot-left p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>