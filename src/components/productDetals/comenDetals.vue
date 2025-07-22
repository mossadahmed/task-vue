<template lang="pug">

div(class="flex justify-around  gap-4 mt-5 mb-4")
 div
   p(class="text-start text-black font-bold pl-10 mt-5") All Reviews 
    span(class="text-gray-400") ({{ Coment.length }})  
 div(class="flex flex-col items-center")
  h1(class="text-black font-extrabold border-b-1  text-center  text-4xl  pb-3 border-gray-400") Reviews  
 div(class="gap-3")
  button(
    @click="setDirection('row')"
    class="bg-white border mr-3 border-gray-300 p-2 rounded-full hover:bg-gray-100 transition"
    :class="{ 'ring-2 ring-black': direction === 'row' }"
  )
    ArrowDownIcon(class="w-6 h-6 text-black")

  button(
    @click="setDirection('reverse')"
    class="bg-white border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition"
    :class="{ 'ring-2 ring-black': direction === 'reverse' }"
  )
    ArrowUpIcon(class="w-6 h-6 text-black")
 
div(:class="['grid grid-cols-12 px-10 gap-2 mt-10', directionClass]")
  div(v-for="item in reversedComments.slice(0, visibleCount)" :key="item.id" class="col-span-12 lg:col-span-6")
    div(class="border text-start w-full p-10 object-cover rounded-2xl border-gray-400 shadow-sm shadow-gray-400")
      div(class="flex justify-between items-center")
        div
          span(v-for="i in 5" :key="i" class="text-yellow-300 text-2xl") {{ i <= Math.round(item.rating || 0) ? '★' : '☆' }}
        p(class="text-4xl cursor-pointer text-gray-300 text-end") ...
      div(class="flex gap-4")
        h1(class="font-bold text-black") {{ item.name }}
        CheckIcon(class="w-6 h-6 p-1 bg-green-600 text-white rounded-full")
      p(class="text-gray-400 mt-5") {{ item.comment }}
      p(class="text-gray-400 mt-5") {{ item.date }}

  div(v-if="isSmallScreen && visibleCount < Coment.length" class="col-span-12 text-center mt-4")
    button(@click="showAllComments" class="px-4 py-2 bg-white text-black border rounded-4xl hover:bg-black hover:text-white transition") more Coment

hr(class="w-4/5 mt-10 text-center text-gray-300 my-4 m-auto")
h1(class="text-black font-extrabold text-center mt-10 text-4xl") You might also like
ProductList(:products="products.slice(11,15)" :limited="4")
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import {
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import ProductList from "../ProductList.vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_PRODUCTS } from "@/GriphQl/Qeure";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";

const visibleCount = ref(3);
const isSmallScreen = ref(false);
const { result } = useQuery(GET_PRODUCTS);
const products = computed(() => (result.value && result.value.products) || []);

onMounted(() => {
  isSmallScreen.value = window.innerWidth <= 768;
  if (!isSmallScreen.value) {
    visibleCount.value = Coment.value.length;
  }
});

function showAllComments() {
  visibleCount.value = Coment.value.length;
}

const Coment = ref([
  {
    id: 1,
    name: "Sarah M.",
    comment: "I absolutely love this t-shirt!",
    rating: 4.5,
    date: "Posted on August 13, 2023",
  },
  {
    id: 2,
    name: "Samantha D.",
    comment: "I'm blown away by the quality",
    rating: 3,
    date: "Posted on August 20, 2023",
  },
  {
    id: 3,
    name: "Ethan R.",
    comment: "This t-shirt is a must-have...",
    rating: 5,
    date: "Posted on August 14, 2023",
  },
  {
    id: 4,
    name: "Liam K.",
    comment: "This t-shirt is a fusion of comfort...",
    rating: 4.5,
    date: "Posted on August 18, 2023",
  },
  {
    id: 5,
    name: "Alex M.",
    comment: "The t-shirt exceeded my expectations...",
    rating: 4,
    date: "Posted on August 16, 2023",
  },
  {
    id: 6,
    name: "Ava H",
    comment: "I'm not just wearing a t-shirt...",
    rating: 3.5,
    date: "Posted on August 15, 2023",
  },
]);
const direction = ref<"row" | "reverse">("row");

const reversedComments = computed(() => {
  return direction.value === "row" ? Coment.value : [...Coment.value].reverse();
});

function setDirection(dir: "row" | "reverse") {
  direction.value = dir;
}
</script>
