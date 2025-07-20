<!-- eslint-disable no-octal -->
<template lang="pug">
div(class="h-[1050px] md:h-[700px] lg:h-[700px] overflow-y-hidden w-full bg-[rgba(242,240,241,1)]" data-aos="fade-up" data-aos-duration="1000")
  div(class="grid grid-cols-12 p-8 sm:p-16")
    div(class="mt-9 col-span-12 md:col-span-6 lg:col-span-6")
      h1(class="font-extrabold text-3xl md:text-4xl lg:text-5xl text-black text-start") FIND CLOTHES THAT MATCHES YOUR STYLE 
      p(class="text-start mt-[30px]") Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      router-link(to="/products")
       button(class="bg-black text-white px-6 py-4 mt-[30px] rounded-full w-full flex justify-center md:w-[184px] hover:bg-white hover:text-black duration-500 border") Shop Now
      div(class="grid grid-cols-12 gap-6 px-4 max-w-screen-xl mx-auto mt-16")
       
       div(class="col-span-6 sm:col-span-4 lg:col-span-4  text-center p-4")
        h4(class="text-2xl font-bold border-x-2 text-black border-gray-300") 200+
        p(class="text-gray-600") International Brands
      
       div(class="col-span-6 sm:col-span-4 lg:col-span-4  text-center p-4")
        h4(class="text-2xl font-bold border-x-2 text-black border-gray-300") 2,000+
        p(class="text-gray-600") High-Quality Products
       
       div(class="col-span-12 sm:col-span-4 lg:col-span-4 text-center p-4")
        h4(class="text-2xl font-bold border-x-2 text-black border-gray-300") 30,000+
        p(class="text-gray-600") Happy Customers
      
      div(class="mt-16 gap-10 place-items-center")
    div(class="col-span-12 md:col-span-6 lg:col-span-6  ")
      img(:src="rectangleImg" class=" w-full ")
PartePrand
h1(class="text-5xl font-extrabold mt-8 text-black") NEW ARRIVALS
ProductList(:products="products" :limited="4")
hr(class="text-gray-300 w-4/5 p-4 m-auto mt-5")
h1(class="text-5xl font-extrabold mt-8 text-black") top selling
ProductList(:products="products.slice(10,14)" :limited="4" )
button(class="border rounded-2xl w-4/5 lg:w-[200px] border-gray-400 h-10 hover:bg-black hover:text-white duration-500 ")
   router-link(to="/products" ) View All
hr(class="text-gray-300 w-4/5 p-4 m-auto mt-5")
Srctions
SwiperComent
</template>
<script setup lang="ts">
import rectangleImg from "@/assets/Group 14.jpg";
import PartePrand from "../components/PartePrand.vue";
import ProductList from "../components/ProductList.vue";
import Srctions from "../components/SectionsVue.vue";
import SwiperComent from "../components/SwiperComent.vue";
import { GET_PRODUCTS } from "../GriphQl/Qeure";
import { useProductStore } from "../store/store";
import { useQuery } from "@vue/apollo-composable";
import { computed, onMounted } from "vue";

const store = useProductStore();
const { result, error } = useQuery(GET_PRODUCTS);
const products = computed(() => result.value?.products || []);
</script>
