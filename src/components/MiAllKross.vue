<script setup>
    defineProps({
        onChangeQuery: Function,
        onChangeSearch: Function,
    })
</script>

<template>
    <div class="all_kross">
        <h1>
            Все кроссовки
        </h1>
        <div class="all_kross-bot">
            <select @change="onChangeQuery" id="select">
                <option value="name">По названию</option>
                <option value="price">По убыванию</option>
                <option value="-price">По возрастанию</option>
            </select>
            <div class="rel">
                <input type="text" @input="onChangeSearch" placeholder="Поиск..." class="">
                <svg class="sbg-abs" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
           
        </div>
    </div>
</template>
<style>
.all_kross {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
}
.rel {
    position: relative;
}
.sbg-abs {
    position: absolute;
    top: 15px;
    left: 18px;
}
.all_kross h1{
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.all_kross-bot {
    display: flex;
    gap: 20px;
}
.all_kross-bot select{
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 150px;

}
.all_kross-bot input{
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    width: 250px;
    height: 45px;
    padding-left: 46px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
}

</style>