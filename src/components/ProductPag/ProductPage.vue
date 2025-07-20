<template lang="pug">
div(v-if="loading")
  div(class="flex justify-center items-center h-40")
    div(class="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin")

div(v-else)
  div(class="px-4 py-6")
    nav(class="flex items-center gap-2 text-sm text-gray-600 mb-4")
      span(v-for="route in filteredRoutes.slice(0,2)" :key="route.path")
       template(v-if="route.name === 'productDetals'")
        span(class=" hidden ") {{route.name }} 
       template(v-else)
         router-link(:to="route.path" class="hover:underline ") {{ route.name }} >
  div(class="px-4 py-8 max-w-7xl mx-auto")
    h1(class="text-3xl font-bold mb-8 text-center") All Product

    div(class="flex justify-between mb-6 flex-wrap gap-4")
      div(class="flex items-center gap-2")
        button(@click="toggleFilter" class="bg-white border px-4 py-2 rounded flex items-center gap-2")
          font-awesome-icon (:icon="['fas', 'sliders']" class="text-xl")
          span  Filter Price
        div(v-if="showFilter" class="absolute bg-white shadow rounded mt-2 z-50")
          div(v-for="option in priceOptions" :key="option.value" @click="selectPrice(option.value)" class="p-2 hover:bg-gray-100 cursor-pointer")
            span {{ option.label }}

      div
        select(v-model="categoryFilter" class="border px-4 py-2 rounded")
          option(value="All Categories") All Categories
          option(v-for="category in uniqueCategories" :key="category.id" :value="category.name") {{ category.name }}

    div(class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6")
      div(v-for="product in filteredProducts" :key="product.id" class=" duration-500 ease-in-out rounded-lg p-4 hover:shadow transition")
       router-link(:to="`/product/${product.id}`")
        img(:src="product.images" alt="product image" class="w-full h-48 object-cover rounded mb-2 scale-100 hover:scale-105 duration-500 ease-in-out")
        h2(class="text-lg font-bold mb-1") {{ product.title.slice(0, 20) }}...
        div(class="text-yellow-400 mb-1")
          span(v-for="i in 5" :key="i") {{ i <= getRandomRating(product.id) ? '★' : '☆' }}
        p(class="text-gray-700 font-semibold mb-2") {{ product.price }} $

    div(class="flex justify-center gap-2 mt-8")
      button(v-for="page in totalPages" :key="page" @click="changePage(page)" :class="['px-4 py-2 rounded border', currentPage === page ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white transition']") {{ page }}
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_PRODUCTS } from "@/GriphQl/Qeure";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const loading = ref(true);
const showFilter = ref(false);
const categoryFilter = ref("All Categories");
const selectedPrice = ref("all");
const currentPage = ref(1);
const itemsPerPage = 12;
const filteredRoutes = computed(() => {
  return router.options.routes.filter((r) => r.path !== route.name);
});
const { result, error } = useQuery(GET_PRODUCTS);

const products = computed(() => result.value?.products || []);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

const priceOptions = [
  { label: "All", value: "all" },
  { label: "40 - 200", value: "40-200" },
  { label: "200 - 300", value: "200-300" },
  { label: "300 - 400", value: "300-400" },
  { label: " Up 400", value: "up 400" },
];

const uniqueCategories = computed(() => {
  const seen = new Set();
  return products.value
    .map((p: { category: any; }) => p.category)
    .filter((cat: { name: unknown; }) => {
      if (seen.has(cat.name)) return false;
      seen.add(cat.name);
      return true;
    });
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(start, start + itemsPerPage);
});

const categoryFiltered = computed(() => {
  if (categoryFilter.value === "All Categories") return paginatedProducts.value;
  return paginatedProducts.value.filter(
    (p: { category: { name: string; }; }) => p.category.name === categoryFilter.value
  );
});

const filteredProducts = computed(() => {
  if (selectedPrice.value === "all") return categoryFiltered.value;
  if (selectedPrice.value === "up 400")
    return categoryFiltered.value.filter((p: { price: number; }) => p.price > 400);
  const [min, max] = selectedPrice.value.split("-").map(Number);
  return categoryFiltered.value.filter((p: { price: number; }) => p.price >= min && p.price <= max);
});

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

function toggleFilter() {
  showFilter.value = !showFilter.value;
}

function selectPrice(value: string) {
  selectedPrice.value = value;
  showFilter.value = false;
}

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) currentPage.value = page;
}

function getRandomRating(id: number): number {
  return (id % 5) + 1;
}
</script>
