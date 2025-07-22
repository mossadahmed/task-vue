/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
import { ref } from "vue";
interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}

export const useCartProduct = defineStore('cart', () => {
  const cartItem = ref<CartItem[]>([]);

  function addToCart(item: { id: number; title: string; image: string; price: number; color: string; size: string; quantity: number; }) {
    const existingItem = cartItem.value.find(
      (p) => p.id === item.id && p.size === item.size && p.color === item.color
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItem.value.push(item);
    }
  }

  function removeFromCart(itemId: number) {
    cartItem.value = cartItem.value.filter((p) => p.id !== itemId);
  }

 function updateQut(itemId: number, amount: number) {
  const product = cartItem.value.find((p) => p.id === itemId);
  if (product) {
    product.quantity += amount;
    if (product.quantity <= 0){
      removeFromCart(itemId);
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

