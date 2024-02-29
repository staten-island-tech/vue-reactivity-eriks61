<template>
  <div id="cart">
      <p> {{ store.showCart(MenuItems) }}</p>
    </div>
  <div class = "flex-container"> 
  <div id="food">
    <h2>{{ Destination.FoodName }}</h2>
    <img :src="Destination.Image" alt="" />
    <h2>{{ clicked }}</h2>
    <button @click="store.addCart(Destination.FoodName)">Add To Cart {{ store.count }}</button>
  </div>
<ul>
  
</ul>
</div>
</template>

<script setup>

const props = defineProps({
  Destination: Object,
});

import { MenuItems } from '@/router/extra';
import { store } from '../stores/store.js';

</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
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
  width: 50%;
  height: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>