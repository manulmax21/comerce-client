<template>
  <div class="catalog">
    <div class="container">
      <div class="row row-cols-3">
        <div
            v-for="el in products"
            :key="el"
            class="col el"
        >
          <catalog-item-component/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItemComponent from "@/components/catalog/catalogItemComponent";
export default {
  name: "catalogComponent",
  components: {CatalogItemComponent},
  data(){
    return{
      products: [1,2,3,4,5]
    }
  },
}
</script>

<style lang="scss" scoped>
.catalog{
  margin: 20px;
  .container{
    align-items: center;
  }
  .row{
    .el{
      margin: 10px 0;
      display: flex;
      justify-content: center;
    }
  }
}
</style>