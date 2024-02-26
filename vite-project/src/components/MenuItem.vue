<template>
  <div class = "flex-container">
  <div id="food">
    <h2>{{ Destination.FoodName }}</h2>
    <img :src="Destination.Image" alt="" />
    <h2>{{ clicked }}</h2>
    <button @click="increment">Add To Cart</button>
  </div>
</div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Destination: Object,
});
let Cart = [];
//clicker logic
const clicked = ref(0);
function increment() {
  clicked.value++;
  Cart.push(MenuItem.FoodName)
  console.log(Cart);
}

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
  height: 150vh;
  width: 200vh;
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