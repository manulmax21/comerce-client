<template>
  <div class="card" style="width: 18rem;">
    <div class="card__img">
      <img src="../../assets/img/1.jpg" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <my-button>Добавть в корзину</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/myButton";
export default {
  name: "catalogItemComponent",
  components: {MyButton}
}
</script>

<style lang="scss" scoped>
.card{
  padding: 5px;
  .card__img{
    text-align: center;
  }
  img{
    overflow: hidden;
    max-width: 120px;
    height: auto;
  }
}
</style>