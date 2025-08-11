import { useCartStore } from "../stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartComponent = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  const handleQuantityChange = (itemId, type, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId, type);
    } else if (newQuantity <= 20) {
      updateQuantity(itemId, type, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white/20 flex flex-col items-center justify-center p-8 rounded-xl text-white">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="">Add some products to start!</p>
      </div>
    );
  }

  return (
    <div className="bg-white/20 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Cart</h1>
          <button
            onClick={clearCart}
            className="bg-black text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Clear cart
          </button>
        </div>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.type}`}
              className="flex items-center gap-6 p-6 bg-black/60 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="">${item.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity - 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faMinus} className="text-sm" />
                  </button>

                  <span className="w-12 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity + 1
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faPlus} className="text-sm" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-lg">
                    ${item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.type)}
                  className="text-gray-100 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Amount</h2>
            <p className="text-3xl font-bold text-gray-800">
              ${getTotalPrice()}
            </p>
          </div>

          <button className="w-full mt-4 bg-white text-black border border-black py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 font-semibold cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
