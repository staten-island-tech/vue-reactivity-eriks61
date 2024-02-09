<template>
    <div>
      <h1>{{ menuItem.name }}</h1>
      <img :src="menuItem.img" alt="" />
      <h2>{{ clicked }}</h2>
      <button @click="increment">Add To Cart</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const props = defineProps({
    menuItem: Object,
  });
  //clicker logic
  const clicked = ref(0);
  function increment() {
    clicked.value++;
  }
  </script>
  
  <style scoped>
  img {
    width: 250px;
    height: 300px;
    object-fit: cover;
  }
  </style>