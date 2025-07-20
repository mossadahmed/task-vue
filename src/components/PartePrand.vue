<template lang="pug">
div(class="bg-black py-5 px-5" data-aos="fade-up"  data-aos-anchor-placement="bottom" data-aos-duration="1000")
  div(class="mx-auto")
    div(class="grid grid-cols-3 sm:grid-cols-5 gap-5 items-center px-3.5")
      div(
        v-for="(logo, index) in prids"
        :key="index"
        :class="[index === 1 ? 'col-span-full col-start-2 justify-self-center sm:col-auto' : '','w-full max-w-[100px] mx-auto']"
      )
        img(:src="logo" :alt="'brand ' + index" class="w-full")


</template>
<script setup lang="ts">
import prand1 from "@/assets/prand/Group-1.png";
import prand2 from "@/assets/prand/Group.png";
import prand3 from "@/assets/prand/gucci-logo-1-1.png";
import prand4 from "@/assets/prand/prada-logo-1-1.png";
import prand5 from "@/assets/prand/zara-logo-1-1.png";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prids = [prand1, prand2, prand3, prand4, prand5];
</script>
