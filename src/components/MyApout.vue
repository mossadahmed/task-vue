<template lang="pug">
div(class="bg-white min-h-screen py-16 px-6 md:px-20")
  h1(class="text-4xl font-extrabold text-black mb-6 text-center") About Us
  p(class="text-gray-700 max-w-3xl mx-auto text-lg leading-7 text-center")
    | Welcome to our store! At Shop.co, we believe that fashion is more than just clothing—it's a way of expressing who you are. 
    | Our mission is to provide high-quality, design-forward pieces that inspire confidence and creativity in everyone who wears them.
  
  div(class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto")
    div(class="bg-gray-100 p-6 rounded-2xl shadow-sm")
      h2(class="text-xl font-bold text-black mb-2") Our Vision
      p(class="text-gray-600")
        | To become the go-to destination for modern individuals seeking style, comfort, and sustainability.

    div(class="bg-gray-100 p-6 rounded-2xl shadow-sm")
      h2(class="text-xl font-bold text-black mb-2") Our Team
      p(class="text-gray-600")
        | We're a passionate group of designers, developers, and dreamers committed to redefining e-commerce fashion.
  div(class="mt-16 text-center")
    router-link(to="/")
      button(class="px-6 py-2 text-black border border-black rounded-3xl hover:bg-black hover:text-white transition")
        | Back to Home
</template>
