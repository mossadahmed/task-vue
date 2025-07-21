<template lang="pug">
  div(class="flex justify-center  items-center px-8 gap-2.5 flex-wrap mt-5" data-aos="fade-up" data-aos-duration=1000)
    div(v-for="product in limitedProducts" :key="product.id" class="p-4 rounded-lg w-60")
     router-link(:to="`/product/${product.id}`")
      img(:src="product.images" alt="Product Image" class="w-full h-48 object-cover rounded-lg scale-100 hover:scale-105 duration-500")
      h2(class="text-start font-bold mt-2") {{ product.title?.slice(0, 20) }} ...
      div(class="flex justify-start my-1")
        span(
          v-for="i in 5"
          :key="i"
          class="text-yellow-400 text-xl"
        ) {{ i <= getRandomRating(product.id) ? '★' : '☆' }} 
      p(class="text-start mt-1 text-gray-700 font-semibold") {{ product.price }} $ 
  
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps<{
  limited?: number;
  products: [];
}>();
const button = ref(true);
const limitedProducts = computed(() => {
  if (!props.products) return [];
  return props.limited
    ? props.products.slice(0, props.limited)
    : props.products;
});
function getRandomRating(id: number): number {
  return (id % 5) + 1;
}
</script>
