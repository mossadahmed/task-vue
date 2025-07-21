<!-- eslint-disable prettier/prettier -->
<template lang="pug">
div(class="h-20")
  div(class="h-full flex items-center justify-around gap-10 p-4 border border-e-2 border-gray-300 shadow  shadow-gray-200") 
    div(class="flex items-center gap-5 ")
     Bars3Icon(class="w-6 h-6 text-gray-500 cursor-pointer lg:hidden font-extrabold" v-if="!isMenuOpen" @click="toggleMenu")
     Bars2Icon(class="w-6 h-6 text-gray-500 cursor-pointer lg:hidden font-extrabold" v-if="isMenuOpen" @click="toggleMenu")
    router-link(to="/" class="font-extrabold text-black text-2xl md:text-1xl ") SHOP.CO
    div(class="hidden lg:flex md:flex  justify-center items-center  gap-10  sm:text-sm") 
     router-link(to="/about" class="text-lg font-medium") Apout
     router-link(to="/contact" class="text-lg font-medium") Conact
     router-link(to="/products" class="text-lg font-medium") Products
    
    div(class="relative flex items-center w-lg ")
      MagnifyingGlassIcon(class="absolute right-0 md:left-4 w-5 h-5 cursor-pointer text-gray-500 md:pointer-events-none" @click="toggleSearch")
      input(
        type="text" 
        placeholder="Search for products..."
        class="hidden md:flex py-2 w-full placeholder:text-center bg-gray-100 border text-center border-gray-200 rounded-3xl text-sm focus:outline-none  "
      )
    div(class="flex items-center gap-6 relative")
     router-link(to="/productcard")
      ShoppingCartIcon(class="w-6 h-6 text-gray-500 font-extrabold") 
      p(:class="[cartStore.cartItem == 0 ? 'hidden' : 'flex absolute bg-black text-white hover:bg-white hover:text-black w-5 px-1.5 rounded-[100%] text-sm ring-1 left-3 bottom-3 ']") {{ cartStore.cartItem.length }}
     UserCircleIcon(class="w-6 h-6 text-gray-500 font-extrabold")
      
div(v-if="isMenuOpen" class="fixed inset-0 z-50 md:hidden"
 
)
 div(
  class="absolute inset-0 bg-black/40 backdrop-blur-sm"
  @click="toggleMenu"
)

  div(
  data-aos="fade-right"  
  data-aos-duration="1000"
  class="absolute top-0 left-0 w-64 h-full text-start bg-white p-6 flex flex-col gap-10 shadow-lg transition-all duration-300 transform translate-x-0 ease-in-out"
)
   router-link(to="/" class="font-extrabold text-black text-2xl md:text-1xl" @click="toggleMenu") SHOP.CO
   router-link(to="/about" class="text-lg font-medium" @click="toggleMenu") About
   router-link(to="/contact" class="text-lg font-medium" @click="toggleMenu") Contact
   router-link(to="/products" class="text-lg font-medium" @click="toggleMenu") Products

div( v-if="isSerch" data-aos="fade-down"  data-aos-duration="1000"
    class=" relative top-0 left-0  w-full ba bg-white p-6 flex flex-col gap-6 shadow-lg transition-all duration-300 transform translate-y-0 ease-in-out" 
  )
   input(
        type="text" 
        placeholder="Search for products..."
        class=" py-2 w-full placeholder:text-center bg-gray-100 border border-gray-200 rounded-3xl text-sm text-center focus:outline-none  "
      )

</template>

<script setup lang="ts">
import { useCartProduct } from "../store/Cart";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  Bars2Icon,
} from "@heroicons/vue/24/outline";
const cartStore = useCartProduct();
import { ref } from "vue";
const isSerch = ref(false);
const isMenuOpen = ref(false);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toggleSearch = () => {
  isSerch.value = !isSerch.value;
};
</script>
