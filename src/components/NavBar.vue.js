import { useCartProduct } from "../store/Cart";
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
//# sourceMappingURL=NavBar.vue.js.map