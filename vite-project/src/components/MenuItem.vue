<template>
  <div class = "flex-container"> 
  <div id="food">
    <h2>{{ Destination.FoodName }}</h2>
    <img :src="Destination.Image" alt="" />
    <h2>{{ clicked }}</h2>
    <button @click="store.addCart(Destination.FoodName)">Add To Cart {{ store.count }}</button>
  </div>

</div>
  <div class="cart" v-if="store.cartItems.length === 0">
      <h2>Empty Cart</h2>
    </div>
    <div v-else>
      <div v-for="Destination in store.CartItems" :key="Destination.Foodname">
        <h2>{{ Destination.FoodName }}</h2>
      </div>
    </div>
  
</template>

<script setup>

const props = defineProps({
  Destination: Object,
});


import { store } from '../stores/store.js';

</script>

<style scoped>
.cart {
  position: absolute;
  font-size: medium;

}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  top: 0; right: 0;
}
#food{
  background-color: antiquewhite;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px;
  border-radius: 2rem;
  padding: 20px;
  height: 45vh;
  width: 50vh;
  align-items: center;
  flex-direction: row;
}
img {
  width: 80%;
  height: 80%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>