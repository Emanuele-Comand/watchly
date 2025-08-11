import { useCartStore } from "../stores";
import { useState } from "react";

const AddToCart = ({ quantity = 1, product }) => {
  const { addToCart, getTotalItems } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
        quantity: quantity,
      });

      // Mostra feedback visivo
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleAddToCart}
        className={`border-2 border-black px-4 py-2 rounded-full mt-8 w-32 whitespace-nowrap cursor-pointer transition-all duration-300 ${
          isAdded
            ? "bg-green-500 text-white border-green-500"
            : "bg-white text-black hover:bg-black hover:text-white"
        }`}
      >
        {isAdded ? "Aggiunto!" : "Add to cart"}
      </button>

      {/* Toast di conferma */}
      {isAdded && (
        <div className="mt-2 text-sm text-green-600 font-medium">
          {quantity} {quantity === 1 ? "elemento" : "elementi"} aggiunto
          {quantity === 1 ? "" : "i"} al carrello
        </div>
      )}
    </div>
  );
};

export default AddToCart;
