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
:root{
  --color1: #242582;
  --color2: #553D67;
  --color3: #F64C72 ;
  --color4: #99738E ;
  --color5: #2F2FA2 ;
}
.bg1{
  background-color: var(--color1);
}
.bg3{
  background-color: var(--color3);
}
.bg-grad15{
  background: linear-gradient(to right, var(--color1) 0%, var(--color5) 100%);
}
.bg-grad34{
  background: linear-gradient(to right, var(--color3) 0%, var(--color4) 100%);
}
a {
  text-decoration: none;
}
</style>
