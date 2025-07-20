<template lang="pug">
div(class="flex flex-col min-h-screen bg-gray-300 mt-26" data-aos="fade-up")
  main(class="flex-grow relative py-16")
   div(class="bg-black p-7 w-4/5 mx-auto rounded-2xl relative z-10 mt-[-130px]")
     h1(class="lg:text-4xl text-2xl mb-5  font-extrabold text-white") STAY UPTO DATE ABOUT OUR LATEST OFFERS
     div(class="text-white text-center relative md:text-start w-full lg:w-4/5  gap-9 lg:text-start m-auto col-span-12 md:col-span-6 lg:col-span-6")
      form(@submit.prevent="Sendemail" class="space-y-4  ")
      input(type="email" name="user_email" placeholder="Enter your email address"
       class="w-full h-[50px] px-10 rounded-full -z-30  text-gray-900 bg-white")
      EnvelopeIcon(class="absolute w-6 h-6 bottom-21 left-2 text-gray-500")
      button(type="submit"
       class="bg-white hover:bg-black w-full h-[50px] hover:text-white hover:border mt-5 hover:border-white text-black px-4 py-2 rounded-full ease-in duration-500 font-semibold") Subscribe to Newsletter+
   div(class="mt-[150px] lg:mt-[100px] "
     data-aos-duration=700)
   FooterInfo
  hr(class="text-gray-400 w-4/5 p-4 m-auto mt-5")
  div(class="lg:flex lg:justify-between items-center") 
  h1(class="text-gray-500") Shop.co © 2000-2023, All Rights Reserved
  div(class="flex justify-center mt-5")
   div(v-for="(image , i) in images" :kye="i")
    img(:src="image" class="scale-90 hover:scale-110 duration-500")
  
</template>
<script setup lang="ts">
import image1 from "../assets/bankers/Badge.png";
import image2 from "../assets/bankers/Badge (1).png";
import image3 from "../assets/bankers/Badge (2).png";
import image4 from "../assets/bankers/Badge (3).png";
import image5 from "../assets/bankers/Badge (4).png";
import emailjs from "@emailjs/browser";
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import FooterInfo from "../components/LinksFoont.vue";
import { ref } from "vue";

const images = ref([image1, image2, image3, image4, image5]);
function Sendemail(event: Event) {
  emailjs
    .sendForm(
      "mosad102030", // Replace with your service ID
      "template_62vvvwa", // Replace with your template ID
      event.target as HTMLFormElement
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Email sent successfully");
      },
      (error) => {
        console.error("Email error:", error.text);
        alert("Failed to send email.");
      }
    );
}
</script>
