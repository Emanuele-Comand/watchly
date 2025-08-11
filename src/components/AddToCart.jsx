import { useCartStore } from "../stores";

const AddToCart = ({ quantity = 1, product }) => {
  const { addToCart } = useCartStore();

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
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-white text-black border-2 border-black px-4 py-2 rounded-full mt-8 w-32 whitespace-nowrap cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
