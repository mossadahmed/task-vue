import { GET_PRODUCT_BY_ID, GET_PRODUCTS } from "@/GriphQl/Qeure";
import { useQuery } from "@vue/apollo-composable";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("products", () => {
  const products = ref([]);
  const product = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const getProduct = (value: number) => {
    loading.value = true;
    const { onResult, onError } = useQuery(GET_PRODUCTS);
    onResult(({ data }) => {
      products.value = data.products;
      loading.value = false;
    });
    onError((error: any) => {
      error.value = error.message || "the error 404";
      loading.value = false;
    });
  };
  const getProductById = (id: string) => {
    loading.value = true;
    const { onResult, onError } = useQuery(GET_PRODUCT_BY_ID, { id });

    onResult(({ data }) => {
      product.value = {
        ...data.product,
        quantity: 1,
      };
      loading.value = false;
    });

    onError((err: any) => {
      error.value = err.message;
      loading.value = false;
    });
  };
  return { product, loading, getProductById, getProduct, products, error };
});
