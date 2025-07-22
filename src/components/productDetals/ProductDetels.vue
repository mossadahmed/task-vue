<template lang="pug">
div(v-if="loading")
  div(class="flex justify-center items-center h-40")
    div(class="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin")

div(v-else)
  div(class="px-7")
    nav(class="flex items-center gap-2 text-sm text-gray-600 mb-4")
      span(v-for="route in filteredRoutes.slice(0,3)" :key="route.path")
        template(v-if="route.name === 'productDetals'")
          span(class="text-gray-500 capitalize font-semibold") {{ product?.category?.name }} >
        template(v-else)
          router-link(:to="route.path" class="text-blue-600 hover:underline capitalize") {{ route.name || route.path }} >

  div(class="grid grid-cols-12 gap-6")
    div(class="col-span-12 gap-3 lg:col-span-6 p-4 lg:flex flex-row-reverse")
      max
       img(
        :src="selectedImage || product?.images[0]"
        data-aos="fade-up"
        data-aos-duration="1000"
        v-if="selectedImage"
        class="w-full m-auto rounded-2xl shadow mb-4"
      )

      div(class="flex gap-3 lg:flex-col sm:w-1/2 md:w-1/2 flex-wrap mx-auto mb-5")
       img(
        v-for="(image, index) in product.images"
        :key="index"
        :src="image"
        @click="changeImage(image)"
        class="lg:w-60 object-cover mx-auto justify-center w-26 h-26 lg:h-40 rounded-2xl cursor-pointer border-2"
      )
    div(class="col-span-12 lg:col-span-6 p-7 text-start ")
     h1(class="font-extrabold text-4xl text-black") {{product.title}}
     div(class="text-lg flex items-center mt-2") 
      span(v-for="i in 5" :key="i" class="text-2xl text-yellow-300") {{i <= Stare(product.id)? '★' : '☆'}}
      div(class="flex text-sm items-center mt-1 ml-1 font-bold")
       p {{Stare(product.id)}}
       p(class="text-gray-400") /5
     div(class="flex gap-3 items-center mt-2")
      p(class="font-black text-xl text-black") ${{product.price}}
      del(class="font-black text-xl text-gray-400") ${{(product.price* 0.4).toFixed(2)}}
      p(class="bg-red-300 w-[60px] text-center mt-1 text-red-500 rounded-2xl") -40%
     p(class="text-gray-400 mt-2") {{product.description}}
     hr(class="w-full text-gray-300 my-4 m-auto")
     p(class="text-gray-400") Select Colors
     div(class="flex gap-5 mt-2")
      div(v-for="color in colors" :key="color" class="relative")
       button(
      @click="colorButton(color)"
      :style="{ backgroundColor: color }"
      class="w-[50px] h-[50px] rounded-full transition border-2"
      :class="selectedColor === color ? 'ring-2 ring-black' : 'border-transparent'"
    )
        font-awesome-icon(
      v-if="selectedColor === color"
      :icon="['fas', 'check']"
      class=" w-[50px]  text-white text-2xl")
     hr(class="w-full text-gray-300 my-4 m-auto")
     p(class="text-gray-400 mt-2") Choose Size
     div(class="flex justify-start gap-1.5  mt-5")
      div(v-for="Sizes in Size" :kye="Sizes")
       button(@click="selecteSizebutton(Sizes)" :class="selecteSize === Sizes ?'bg-black text-white w-[100px] h-[50px] rounded-4xl':'bg-gray-300 text-black w-[80px] h-[50px] rounded-4xl'") {{Sizes}}
     hr(class="w-full text-gray-300 my-4 m-auto")
     div(class="flex flex-row-reverse justify-end  gap-3")
      button( @click="addTocart" class="bg-black text-white w-1/2 h-[50px] rounded-4xl") Add To Cart
      div(class="bg-gray-300 text-xl items-center text-black w-1/4 h-[50px] rounded-4xl flex justify-around")
       button(@click="decreaseQty" class="text-2xl") -
       p(class="text-2xl") {{quantity}}
       button(@click="increseQty" class="text-2xl") +

     p(class="mt-8 text-start text-2xl font-black text-black  ") Total Price 
      span(class=" text-xl font-semibold text-gray-400") ( ${{allPric}} )    
  comenDetals 
   
</template>
<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { useRoute, useRouter } from "vue-router";
import { GET_PRODUCT_BY_ID } from "@/GriphQl/Qeure";
import { computed, onMounted, ref, watch } from "vue";
import { useCartProduct } from "@/store/Cart";
import comenDetals from "@/components/productDetals/comenDetals.vue";
const route = useRoute();
const id = route.params.id;
const router = useRouter();
const { result, loading, error } = useQuery(GET_PRODUCT_BY_ID, { id });
const product = computed(() => result.value?.product);
const selectedImage =  ref<string | null>(null);
const selectedColor = ref("");
const quantity = ref(1);
const colors = ref(["red", "green", "black"]);
const Size = ref(["Small", "Medium", "Large", "X-Large"]);
const selecteSize = ref("");

const cardStore = useCartProduct();
function addTocart() {
  if (!selectedColor.value || selecteSize.value) {
    alert("chack your selection");
  }
  const item = {
    id: product.value.id,
    title: product.value.title,
    image: product.value.images[0],
    price: product.value.price,
    color: selectedColor.value,
    size: selecteSize.value,
    quantity: quantity.value,
    allPrice: quantity.value * product.value.price,
  };
  cardStore.addToCart(item);
}
const allPric = computed(() => quantity.value * product.value.price);

console.log(cardStore.cartItem);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
function selecteSizebutton(Size: string) {
  selecteSize.value = Size;
}
const filteredRoutes = computed(() => {
  return router.options.routes.filter((r) => r.path !== route.path);
});
watch(product, (newProduct) => {
  if (newProduct?.images?.length) {
    const saved = localStorage.getItem("selectedImage");

    if (saved && newProduct.images.includes(saved)) {
      selectedImage.value = saved;
    } else {
      selectedImage.value = newProduct.images[0];
      localStorage.setItem("selectedImage", newProduct.images[0]);
    }
  }
});
onMounted(() => {
  if (product.value?.images?.length) {
    const saved = localStorage.getItem(`selectedImage_${product.value.id}`);
    if (saved && product.value.images.includes(saved)) {
      selectedImage.value = saved;
    } else {
      selectedImage.value = product.value.images[0];
      localStorage.setItem(`selectedImage_${product.value.id}`, product.value.images[0]);
    }
  }
});

function changeImage(img: string | null) {
  selectedImage.value = img;
  localStorage.setItem("selectedImage", img ?? "");
}

function Stare(id: number): number {
  return (id % 5) + 1;
}
function colorButton(color: string) {
  selectedColor.value = color;
}
function increseQty() {
  quantity.value++;
}
function decreaseQty() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}
</script>
