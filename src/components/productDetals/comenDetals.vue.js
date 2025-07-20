import { ref, computed, onMounted } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_PRODUCTS } from "@/GriphQl/Qeure";
const visibleCount = ref(3);
const isSmallScreen = ref(false);
const { result } = useQuery(GET_PRODUCTS);
const products = computed(() => (result.value && result.value.products) || []);
onMounted(() => {
    isSmallScreen.value = window.innerWidth <= 768;
    if (!isSmallScreen.value) {
        visibleCount.value = Coment.value.length;
    }
});
function showAllComments() {
    visibleCount.value = Coment.value.length;
}
const Coment = ref([
    {
        id: 1,
        name: "Sarah M.",
        comment: "I absolutely love this t-shirt!",
        rating: 4.5,
        date: "Posted on August 13, 2023",
    },
    {
        id: 2,
        name: "Samantha D.",
        comment: "I'm blown away by the quality",
        rating: 3,
        date: "Posted on August 20, 2023",
    },
    {
        id: 3,
        name: "Ethan R.",
        comment: "This t-shirt is a must-have...",
        rating: 5,
        date: "Posted on August 14, 2023",
    },
    {
        id: 4,
        name: "Liam K.",
        comment: "This t-shirt is a fusion of comfort...",
        rating: 4.5,
        date: "Posted on August 18, 2023",
    },
    {
        id: 5,
        name: "Alex M.",
        comment: "The t-shirt exceeded my expectations...",
        rating: 4,
        date: "Posted on August 16, 2023",
    },
    {
        id: 6,
        name: "Ava H",
        comment: "I'm not just wearing a t-shirt...",
        rating: 3.5,
        date: "Posted on August 15, 2023",
    },
]);
const direction = ref("row");
const reversedComments = computed(() => {
    return direction.value === "row" ? Coment.value : [...Coment.value].reverse();
});
function setDirection(dir) {
    direction.value = dir;
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
//# sourceMappingURL=comenDetals.vue.js.map