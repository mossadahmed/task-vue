/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCartProduct = defineStore('cart', () => {
    const cartItem = ref([]);
    function addToCart(item) {
        const existingItem = cartItem.value.find((p) => p.id === item.id && p.size === item.size && p.color === item.color);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        }
        else {
            cartItem.value.push(item);
        }
    }
    function removeFromCart(itemId) {
        cartItem.value = cartItem.value.filter((p) => p.id !== itemId);
    }
    function updateQut(itemId, amount) {
        const product = cartItem.value.find((p) => p.id === itemId);
        if (product) {
            const newQty = product.quantity + amount;
            if (newQty > 0) {
                product.quantity = newQty;
            }
        }
    }
    function clearCart() {
        cartItem.value = [];
    }
    return {
        cartItem,
        clearCart,
        updateQut,
        removeFromCart,
        addToCart,
    };
});
//# sourceMappingURL=Cart.js.map