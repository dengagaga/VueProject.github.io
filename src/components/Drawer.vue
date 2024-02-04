<script setup>
  import DriwerItem from './DriwerItem.vue'
  import infoBlock from './infoBlock.vue'
  import {inject} from 'vue'
  const emit = defineEmits(['removeToCard', 'createOrder'])
  const { orderSS } = inject('orderSS')

  defineProps({
        cart: Array,
        closeDrawer: Function,
        totalPriceKorz: Number,
        totalPriceProc: Number,
    })
</script>

<template>
    <div class="modal">
        <div class="modal_box">
            <div class="driwer_items">
                <div class="driwer_items-tops">
                    <h2>Корзина</h2>
                    <img src="/krest.svg" alt="" @click="closeDrawer">
                </div>
                
                    <infoBlock v-if="!totalPriceKorz || orderSS" title="Корзина пустая" description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." image-url="/corzina.png"/>
                    <infoBlock v-if="orderSS" title="Заказ оформле" description="Ваш №22 скоро будет передан курьерской доставке!" image-url="/image 22.png"/>
                
                
                <div class="sss" v-auto-animate>
                     <DriwerItem 
                        :cart="cart"
                        v-for="item in cart" 
                        :key="item.id"
                        :title="item.title"
                        :price="item.price"
                        :image-url="item.imageUrl"
                        @onClickRemove="() => emit('removeToCard', item)"
                        />
                </div>
               
            </div>
            <div class="order">
                <div class="order_top">
                    <p>Итого: </p><div class="flex-1"></div><b>{{ totalPriceKorz }} руб. </b>
                </div>
                <div class="order_top">
                    <p>Налог 5%: </p><div class="flex-1"></div><b>{{ totalPriceProc }} руб. </b>
                </div>
                <button 
                @click="() => emit('createOrder')" 
                :disabled = "totalPriceKorz ? false : true"
                >
                    Оформить заказ
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.sss {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.modal {
    position: fixed;
    left: 0;
    top: 0;

    background: #00000093;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    justify-content: end;
    overflow-y: auto;
    /* visibility: hidden;
    opacity: 0; */
    transition: all 0.4s;
}
.modal_box {
    padding: 30px;
    background-color: white;
    width: 100%;    
    max-width: 385px;
    transition: all 0.5s;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.modal.open {
    visibility: visible;
    opacity: 1;
}
.modal_box h2 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
}
.driwer_items {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.driwer_items-tops {
    display: flex;
    justify-content: space-between;
}
.order_top {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
}

.order button {
    border-radius: 18px;
    background: #9DD458;
    color: #FFF; 
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 30px;
    max-width: 100%;   
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: .3s;
}
.order button:hover {
    background: #95c45d;
}
.order button:disabled {
    background: #868686;
}
.flex-1 {
    flex: 1;
    border-bottom: 1px dashed #DFDFDF;
    transform: translateY(-5px);
}
</style>