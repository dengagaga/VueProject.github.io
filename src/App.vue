<script setup>
  import {  computed, provide,  ref, watch } from 'vue';
  import axios from 'axios'
  import MiHeader from './components/MiHeader.vue'
  import Drawer from './components/Drawer.vue'
  
  

  const cart = ref([])
  const orderSS = ref(null)
  const drawerOpen = ref(false)
  const closeDrawer = () => {
      drawerOpen.value = false
  }
  const openDrawer = () => {
      drawerOpen.value = true
  }
  const totalPrice = computed(
      () => cart.value.reduce((acc, item) => acc + item.price , 0)
    )
    const totalPriceProc = computed(
    () => Math.round((totalPrice.value * 5) / 100)
    )
    const totalPriceKorz = computed(
      () => totalPrice.value + totalPriceProc.value
      
    )
  const addOneToCard = (item) => {
      cart.value.push(item)
      item.isAdded = true
  }
  const removeToCard = (item) => {
    cart.value.splice(cart.value.indexOf(item), 1)
    item.isAdded = false
  }
  
  const createOrder = async () => {
    try {
      const {data} = await axios.post(`https://188cea64a1bef531.mokky.dev/orderd`, {
        items: cart.value, 
        totalPrice: totalPrice.value,
      })
      cart.value = []
      orderSS.value = data.id
      return data
    } catch(err) {
      console.log(err);
    }
  }

  
  watch(cart, () => {
      localStorage.setItem('cart', JSON.stringify(cart.value))
  }, 
  {deep: true})
  provide('cart', {
    cart,
    addOneToCard,
    removeToCard,
  })
  provide('orderSS', orderSS)

</script>

<template>
  <div class="vh">
    
    <Drawer v-if="drawerOpen"
    :closeDrawer="closeDrawer"
    :cart="cart"
    :total-price="totalPrice"
    :total-price-korz="totalPriceKorz"
    :total-price-proc="totalPriceProc"
    @removeToCard="removeToCard"
    @create-Order="createOrder"
    />
    
    <div class="container">
      <MiHeader
      :total-price="totalPrice"
      :openDrawer="openDrawer"
      />
      <hr>
      <router-view></router-view>
    </div> 
</div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
* {
	padding: 0px;
	margin: 0px;
	border: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Links */

a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}

/* Common */

aside, nav, footer, header, section, main {
	display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
	font-weight: inherit;
}

ul, ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

img, svg {
	max-width: 100%;
	height: auto;
}

address {
  font-style: normal;
}

/* Form */

input, textarea, button, select {
	font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
	display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}

legend {
	display: block;
}
body {
  background: #E7F6FF;
  font-family: "Inter", sans-serif;
}
.vh {
  margin-top: 85px;
  margin-bottom: 15px;
}
.container {
  font-family: "Inter", sans-serif;
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  padding-bottom:50px;
}
.card_item-all {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
