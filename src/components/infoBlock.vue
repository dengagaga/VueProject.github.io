<script setup>
    defineProps({
        title: String,
        description: String,
        imageUrl: String,
    })
</script>

<template>
    <div class="corz-all">
        <img class="img_cor" :src="imageUrl" alt="">
        <h2>
            {{ title }}
        </h2>
        <p>
            {{ description }}
        </p>
    </div>
    
</template>

<style>
.corz-all {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
}
.img_cor {
    width: 120px;
    height: 120px;
}
.corz-all h2{
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;

}
.corz-all p{
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
</style>