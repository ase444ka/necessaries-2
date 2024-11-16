<template>
  <div class="products">
    <RouterLink
      v-for="p in productStore.products"
      :key="p.id"
      class="product"
      :to="`/product/${p.id}`"
    >
      <img :src="p.image" />
      <div class="title">
        {{ p.title }}
      </div>
      <button class="buy" @click.prevent="addToCart(p.id)">купить</button>
    </RouterLink>
  </div>
</template>
<script>
import { useProductStore, useCartStore } from '/src/store';
import { mapStores } from 'pinia';

export default {
  name: 'ProductList',

  computed: {
    ...mapStores(useProductStore, useCartStore),
  },
  watch: {},
  methods: {
    addToCart(id) {
      this.cartStore.addProduct(id);
    },
  },
};
</script>
<style scoped lang="scss">
.products {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  @media screen and (max-width: 1280px) {
    justify-content: center;
  }
}
.product {
  cursor: default;
  color: var(--primary);
  width: 380px;
  font-size: 1.2rem;
  @media screen and (min-width: 870px) {
    height: 600px;
  }
  img {
    object-fit: cover;
    height: 400px;
    width: 100%;
  }
  .title {
    @media screen and (min-width: 870px) {
      min-height: 140px;
    }
  }
  
}
</style>
