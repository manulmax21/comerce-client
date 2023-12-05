<template>
  <nav class="navbar navbar-light bg-grad15">
    <a class="navbar-brand cont" href="#">
      <div class="logo">
        <img src="../../assets/logo_1.png" class="d-inline-block align-top">
      </div>
      <div class="nav">
        <router-link :to="{name: 'catalog'}">
          <div>
            <p>Каталог</p>
          </div>
        </router-link>
        <router-link :to="{name: 'cart'}">
          <div>
            <p>Корзина 0</p>
          </div>
        </router-link>
        <router-link :to="{name: 'settings'}">
          <div>
            <p>Настройки</p>
          </div>
        </router-link>
      </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: "headerComponent"
}
</script>

<style lang="scss" scoped>
img{
  width: 40px;
  margin-left: 10px;
}
nav{
  .cont{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .nav{
      color: #fff;
      gap: 20px;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>