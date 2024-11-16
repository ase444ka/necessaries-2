<template>
  <div id="app">
    <HeaderBlock />

    <RouterView />
    <FooterBlock />
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import FooterBlock from '/src/components/FooterBlock.vue';
import HeaderBlock from '/src/components/HeaderBlock.vue';
import { useProductStore } from '/src/store';

export default {
  components: {
    HeaderBlock,
    FooterBlock,
  },
  computed: {
    ...mapStores(useProductStore),
  },
  mounted() {
    console.log('pr', useProductStore);
    this.getProducts();
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        await this.productStore.getProducts();
      } catch (e) {
        alert(`Возникла ошибка: ${e.message}. Попробуйте позже`);
      }
    },
  },
};
</script>

<style>
/* 
@import '/src/fonts/fonts.css';
@import 'normalize.css';
:root {
  --white: #FFFFFF;
  --primary: #275742;
  --black: #606462;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--primary);
  background: var(--white);
  line-height: 1.6;
  font-family: Ubuntu, Roboto, Arial, sans-serif;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

h2 {
  font-size: 48px;
  text-transform: capitalize;
  text-align: center;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
} */
</style>
