<template lang="pug">
div(class="p-5 mt-7 gap-5" data-aos="fade-up" data-aos-duration=1000)
 div(class="flex justify-between items-center w-4/5 ")
  h1(class="font-extrabold lg:text-5xl lg:flex  mt-5 lg:pl-46  text-3xl text-black") OUR HAPPY CUSTOMERS
  div(class="flex gap-5")
   ArrowLeftIcon(class="prev-btn w-4")
   ArrowRightIcon(class="next-btn w-4") Next
 Swiper(
 :slides-per-view="3"
 :breakpoints="{ 0: { slidesPerView: 1 },640: { slidesPerView: 1 },1024: { slidesPerView: 3 }}"
 :modules = "[Navigation, Autoplay]"
 :autoplay = "{ delay: 3000 , disableOnInteraction: false }"
 :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
 class="mySwiper w-4/5 ") 
  SwiperSlide(class="scale-100  hover:scale-101 duration-1000 text-start p-4 transform ease-in-out" v-for="item in Coment" :key="item.id")
   div(class="border  object-cover  p-5 rounded-2xl border-gray-400 shadow-sm shadow-gray-400 ")
    spin(v-for="i in 5" :key="i" class="text-yellow-300 text-2xl") {{ i <= Math.round(item.rating || 0) ? '★' : '☆' }}
    div(class="flex gap-4 ")
     h1(class="font-bold text-black") {{ item.name }}
     CheckIcon(class="w-6 h-6 bg-green-600 text-white rounded-[100%]")
    p(class="text-gray-400 mt-5")  {{ item.comment.slice(0,120) }}...
</template>
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { ArrowRightIcon, CheckIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
const Coment = ref([
  {
    id: 1,
    name: "Sarah M.",
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Samantha D.",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    rating: 3,
  },
  {
    id: 3,
    name: "Ethan R.",
    comment:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    rating: 5,
  },
  {
    id: 4,
    name: "Liam K.",
    comment:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Alex M.",
    comment:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 4,
  },
  {
    id: 6,
    name: "Ava H",
    comment:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 3.5,
  },
  {
    id: 1,
    name: "John Doe",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations",
    rating: 5,
  },
]);
</script>
