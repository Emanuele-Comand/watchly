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
      <div className="bg-white/20 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-xl text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
          Your cart is empty
        </h1>
        <p className="text-sm sm:text-base">Add some products to start!</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Carrello</h1>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base"
          >
            Clear cart
          </button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.type}`}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-50 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base">${item.price}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.type,
                        item.quantity - 1
                      )
                    }
                    className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="text-xs sm:text-sm"
                    />
                  </button>

                  <span className="w-8 sm:w-12 text-center font-semibold text-sm sm:text-base">
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
                    className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-xs sm:text-sm"
                    />
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-base sm:text-lg">
                    ${item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id, item.type)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-100 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Totale
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-gray-800">
              ${getTotalPrice()}
            </p>
          </div>

          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base">
            Procedi all'acquisto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
