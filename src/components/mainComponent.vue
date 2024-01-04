<template>
  <header-component></header-component>
  <router-view/>
</template>

<script>
import headerComponent from "@/components/header/headerComponent";

export default {
  name: "main",
  components: {
    headerComponent
  }
}
fetch('http://localhost:3000/products').then(e => console.log(e))
</script>

<style scoped>

</style>