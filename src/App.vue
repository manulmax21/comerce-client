<template>
  <headerComponent/>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
  <router-view/>
</template>
<script>
import headerComponent from "@/components/header/headerComponent";
export default {
  components:{
    headerComponent
  }
}
</script>
<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
a{
  text-decoration: none;
  color: black;
}
</style>
