<template>
  <div class="card" style="width: 20rem;">
    <div class="card__img">
      <img src="../../assets/img/1.jpg" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="brak fs-4">
      <i class="fi fi-br-trash"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartItemComponent"
}
</script>

<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/2.0.0/uicons-bold-rounded/css/uicons-bold-rounded.css');
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
.brak{
  margin: 0 10px;
}
.fi-br-trash{
  color: #F64C72;
  cursor: pointer;
}
.fi-br-trash:hover{
  color: var(--color1);
}
}
</style>