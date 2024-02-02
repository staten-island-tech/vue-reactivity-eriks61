<template>
  <div>
<h1 v-if="test">good
</h1>
<h1 v-else>bad</h1>
  </div>
</template>

<script setup>
const test = false;
</script>

<style scoped>

</style>