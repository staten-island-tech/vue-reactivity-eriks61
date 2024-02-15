<template>
  <div>
    <h2>{{ Destination.FoodName }}</h2>
    <img :src="Destination.Image" alt="" />
    <h2>{{ clicked }}</h2>
    <button @click="increment">Add To Cart</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Destination: Object,
});
//clicker logic
const clicked = ref(0);
function increment() {
  clicked.value++;
  Cart.push(Destination.FoodName)
  console.log(Cart);
}
const Cart = [];
</script>

<style scoped>
img {
  width: 250px;
  height: 300px;
  object-fit: cover;
}
</style>