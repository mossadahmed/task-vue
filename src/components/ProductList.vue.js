import { computed, ref } from "vue";
const props = defineProps();
const button = ref(true);
const limitedProducts = computed(() => {
    if (!props.products)
        return [];
    return props.limited
        ? props.products.slice(0, props.limited)
        : props.products;
});
function getRandomRating(id) {
    return (id % 5) + 1;
}
function link(id) {
    window.open(`/product/${id}`);
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
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ProductList.vue.js.map