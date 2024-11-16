<template>
  <main>
    <AdsBlock />
    <section class="products">
      <h2>товары</h2>
      <ProductList />
    </section>
  </main>
</template>
<script>
import ProductList from '/src/components/ProductList.vue';
import AdsBlock from '/src/components/AdsBlock.vue';
export default {
  name: 'MainPage',
  components: { AdsBlock, ProductList },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="" scoped></style>
