import { useCartProduct } from "../store/Cart";
import { computed, ref } from "vue";
const Delivery = ref(15);
const cardStore = useCartProduct();
const subtotal = computed(() => cardStore.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0));
const total = computed(() => subtotal.value + Delivery.value);
const price = computed(() => subtotal.value * 0.2);
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
//# sourceMappingURL=productCard.vue.js.map