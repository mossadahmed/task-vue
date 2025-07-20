<template lang="pug">
section(class="bg-white min-h-screen p-10")
  div(class="max-w-3xl mx-auto")
    h1(class="text-4xl font-extrabold text-black mb-8 text-center") Contact Us

    form(class="space-y-6")
      div
        label(for="name" class="block text-gray-700 font-semibold mb-1") Name
        input#name(type="text" placeholder="Your name" class="w-full px-4 py-2 border rounded-xl bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black")

      div
        label(for="email" class="block text-gray-700 font-semibold mb-1") Email
        input#email(type="email" placeholder="Your email" class="w-full px-4 py-2 border rounded-xl bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black")

      div
        label(for="message" class="block text-gray-700 font-semibold mb-1") Message
        textarea#message(rows="5" placeholder="Write your message here..." class="w-full px-4 py-2 border rounded-xl bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black")

      button(type="submit" class="w-full py-3 bg-black text-white rounded-xl font-semibold hover:bg-white hover:text-black border border-black transition") Send Message

    div(class="mt-10 text-center")
      h2(class="text-gray-700 font-bold mb-2") Or contact us directly:
      a(
        :href="whatsappLink"
        target="_blank"
        class="inline-block mt-2 px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
      ) WhatsApp Chat
</template>

<script setup lang="ts">
const phone = "201050012101";
const whatsappLink = `https://wa.me/${phone}`;
</script>
