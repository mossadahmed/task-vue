import { useQuery } from "@vue/apollo-composable";
import { useRoute, useRouter } from "vue-router";
import { GET_PRODUCT_BY_ID } from "@/GriphQl/Qeure";
import { computed, onMounted, ref, watch } from "vue";
import { useCartProduct } from "@/store/Cart";
const route = useRoute();
const id = route.params.id;
const router = useRouter();
const { result, loading, error } = useQuery(GET_PRODUCT_BY_ID, { id });
const product = computed(() => result.value?.product);
const selectedImage = ref("");
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
function selecteSizebutton(Size) {
    selecteSize.value = Size;
}
const filteredRoutes = computed(() => {
    return router.options.routes.filter((r) => r.path !== route.path);
});
watch(product, (newProduct) => {
    if (newProduct?.images?.length) {
        selectedImage.value = newProduct.images[0];
    }
});
function Stare(id) {
    return (id % 5) + 1;
}
function colorButton(color) {
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ProductDetels.vue.js.map