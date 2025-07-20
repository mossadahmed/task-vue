<template lang="pug"> 
 div(class="py-10 bg-gray-200 rounded-2xl w-[78%] mx-auto mt-9 " data-aos="fade-up" data-aos-duration="1000" )
  h1(class="font-extrabold text-3xl lg:text-5xl  text-black") BROWSE BY DERESS STYLE 
  div(class="grid grid-cols-12 p-5 flex-wrap m-auto")
   div(class="col-span-12 md:col-span-5  lg:col-span-5 h-60 overflow-hidden w-[100%]  md:w-[90%] lg:w-[90%] rounded-2xl relative  lg:ml-6") 
    img(:src="imag1" class="scale-160 object-cover w-full h-full hover:scale-150 transform ease-in-out duration-1000")
    h2(class="text-3xl text-gray-800  absolute top-0 left-0 p-4") Casual
   div(class="col-span-12 md:col-span-7  lg:col-span-7 h-60 overflow-hidden w-full rounded-2xl relative mt-7 lg:mt-0    md:mr-6 ") 
    img(:src="imag2" class="scale-110  w-full object-cover h-full hover:scale-100 transform ease-in-out duration-1000 ") 
    h2(class="text-3xl text-gray-800  absolute top-0 left-0 p-4 ") Formal
  div(class="grid grid-cols-12 p-5 flex-wrap m-auto")
   div(class="col-span-12 md:col-span-7  lg:col-span-7 h-60 overflow-hidden w-[100%]  md:w-[90%] lg:w-[90%] rounded-2xl relative mb-5 lg:mb-0  lg:ml-6") 
    img(:src="imag3" class="scale-110 object-cover h-full w-full hover:scale-100 transform ease-in-out duration-1000")
    h2(class="text-3xl text-gray-800  absolute top-0 left-0 p-4") Party
   div(class="col-span-12 md:col-span-5  lg:col-span-5 h-60 overflow-hidden w-full rounded-2xl relative mt-5 lg:mt-0 lg:mr-6  md:mr-6 ") 
    img(:src="imag4" class="scale-110  w-full object-cover h-full hover:scale-100 transform ease-in-out duration-1000  ") 
    h2(class="text-3xl text-gray-800  absolute top-0 left-0 p-4 ") Gym
</template>
<script setup lang="ts">
import imag1 from "@/assets/Sections/image 11.png";
import imag2 from "@/assets/Sections/Frame 62.png";
import imag3 from "@/assets/Sections/image 13.png";
import imag4 from "@/assets/Sections/image 15.png";
</script>
