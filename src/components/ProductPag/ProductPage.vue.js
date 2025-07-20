import { ref, computed, onMounted } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_PRODUCTS } from "@/GriphQl/Qeure";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const loading = ref(true);
const showFilter = ref(false);
const categoryFilter = ref("All Categories");
const selectedPrice = ref("all");
const currentPage = ref(1);
const itemsPerPage = 12;
const filteredRoutes = computed(() => {
    return router.options.routes.filter((r) => r.path !== route.name);
});
const { result, error } = useQuery(GET_PRODUCTS);
const products = computed(() => result.value?.products || []);
onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1000);
});
const priceOptions = [
    { label: "All", value: "all" },
    { label: "40 - 200", value: "40-200" },
    { label: "200 - 300", value: "200-300" },
    { label: "300 - 400", value: "300-400" },
    { label: " Up 400", value: "up 400" },
];
const uniqueCategories = computed(() => {
    const seen = new Set();
    return products.value
        .map((p) => p.category)
        .filter((cat) => {
        if (seen.has(cat.name))
            return false;
        seen.add(cat.name);
        return true;
    });
});
const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return products.value.slice(start, start + itemsPerPage);
});
const categoryFiltered = computed(() => {
    if (categoryFilter.value === "All Categories")
        return paginatedProducts.value;
    return paginatedProducts.value.filter((p) => p.category.name === categoryFilter.value);
});
const filteredProducts = computed(() => {
    if (selectedPrice.value === "all")
        return categoryFiltered.value;
    if (selectedPrice.value === "up 400")
        return categoryFiltered.value.filter((p) => p.price > 400);
    const [min, max] = selectedPrice.value.split("-").map(Number);
    return categoryFiltered.value.filter((p) => p.price >= min && p.price <= max);
});
const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));
function toggleFilter() {
    showFilter.value = !showFilter.value;
}
function selectPrice(value) {
    selectedPrice.value = value;
    showFilter.value = false;
}
function changePage(page) {
    if (page >= 1 && page <= totalPages.value)
        currentPage.value = page;
}
function getRandomRating(id) {
    return (id % 5) + 1;
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
//# sourceMappingURL=ProductPage.vue.js.map