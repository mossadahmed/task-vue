import { GET_PRODUCTS } from "../GriphQl/Qeure";
import { useProductStore } from "../store/store";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
const store = useProductStore();
const { result, error } = useQuery(GET_PRODUCTS);
const products = computed(() => result.value?.products || []);
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
//# sourceMappingURL=HomeView.vue.js.map