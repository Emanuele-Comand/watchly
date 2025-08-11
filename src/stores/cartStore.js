import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.type === item.type
      );

      if (existingItem) {
        // Somma la nuova quantità a quella esistente
        const newQuantity = existingItem.quantity + item.quantity;
        // Limita la quantità massima a 20
        const finalQuantity = Math.min(newQuantity, 20);

        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id && cartItem.type === item.type
              ? { ...cartItem, quantity: finalQuantity }
              : cartItem
          ),
        };
      } else {
        // Aggiunge un nuovo item
        return {
          cartItems: [...state.cartItems, item],
        };
      }
    });
  },

  removeFromCart: (itemId, type) => {
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => !(item.id === itemId && item.type === type)
      ),
    }));
  },

  updateQuantity: (itemId, type, quantity) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId && item.type === type ? { ...item, quantity } : item
      ),
    }));
  },

  clearCart: () => {
    set({ cartItems: [] });
  },

  getTotalItems: () => {
    const { cartItems } = get();
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    const { cartItems } = get();
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));

export default useCartStore;
