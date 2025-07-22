<template lang="pug">
div(v-if="cardStore.cartItem.length == 0")
  div(class="p-10") 
    h1(class="font-bold text-2xl text-black") Please back to Shop
    router-link(to="/")
     button(class="w-60 h-10 border rounded-4xl text-white bg-black hover:text-black hover:bg-white duration-500 mt-10") Back To Home 

div(v-else) 
  nav(class="text-start p-6 flex gap-3 ")
   router-link(to="/" )
    h1(class="text-gray-400 font-normal") Home >
   span(class="text-black")  Cart
  h1(class="text-4xl font-extrabold text-black text-start px-8 ") YOUR CART
  div(class="grid grid-cols-12 gap-5 p-5")
    div(class="h-fit col-span-12 lg:col-span-7 border p-5 border-gray-400 shadow-xl rounded-3xl")
      div(v-for="item in cardStore.cartItem" :key="item.id" class="mb-5")
        div(class="flex justify-between items-start")
          div(class="flex gap-2")
            img(:src="item.image" class="w-fit h-36 object-contain rounded-xl")
            div(class="text-start text-sm text-gray-500")
              h1(class="font-bold text-black text-base mb-1") {{ item.title }}
              p Quantity: {{ item.quantity }}
              p Size: {{ item.size }}
              p(:style="{ color: item.color }") Color: {{ item.color }}
              p(class=" font-normal text-black lg:mt-5 text-2xl") ${{ item.price }}
          div(class=" flex flex-col h-36 justify-between items-end") 
            div(class="flex gap-2")
             TrashIcon(
              class="w-5 h-5 ml-16 text-red-500 cursor-pointer" @click="cardStore.removeFromCart(item.id)")
            div(class="bg-gray-300 text-xl items-center text-black w-26 h-[35px] rounded-4xl flex justify-around mt-2")
              button(@click="cardStore.updateQut(item.id, -1)" class="text-2xl") −
              p(class="textsm") {{ item.quantity }}
              button(@click="cardStore.updateQut(item.id, 1)" class="text-2xl") +
        hr(class="text-gray-400 my-3 shadow-sm")  

    div(class="col-span-12 lg:col-span-5 border h-fit p-5 border-gray-400 shadow-xl rounded-3xl")
      h1(class="text-start font-extrabold py-5 text-black text-4xl") Order Summary
      div(class="flex justify-between text-sm mb-3 text-start")
        div(class="text-gray-400")
          p Subtotal
          p Discount (-20%)
          p Delivery Fee
        div(class="text-black")
          p ${{ subtotal.toFixed(2) }}
          p(class="text-red-400") -${{ price.toFixed(2) }}
          p ${{ Delivery }}
      hr(class="text-gray-400 my-3")
      div(class="flex justify-between items-center text-black")
        p Total 
        p(class="text-xl font-semibold") ${{ total.toFixed(2) }}

      div(class="flex mt-5 gap-2")
        div(class="relative flex items-center w-4/5")
          BanknotesIcon(class="absolute left-4 w-5 h-5 text-gray-500")
          input(
            type="text" 
            placeholder="Add promo code"
            class="py-2 w-full text-center bg-gray-100 border text-sm border-gray-200 rounded-3xl focus:outline-none placeholder:text-gray-400"
          )
        button(class="w-40 h-10 border rounded-4xl text-white bg-black hover:text-black hover:bg-white duration-500") Apply

      button(class="cursor-pointer w-full h-10 border rounded-4xl text-white bg-black hover:text-black hover:bg-white flex justify-center items-center gap-2 mt-3")
        | Go to Checkout
        ArrowLongRightIcon(class="text-white w-6 h-5")
</template>

<script setup lang="ts">
import { useCartProduct } from "../store/Cart";
import { computed, ref } from "vue";
import {
  BanknotesIcon,
  ArrowLongRightIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

const Delivery = ref(15);
const cardStore = useCartProduct();

const subtotal = computed(() =>
  cardStore.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
const total = computed(() => subtotal.value + Delivery.value);
const price = computed(() => subtotal.value * 0.2);
</script>
