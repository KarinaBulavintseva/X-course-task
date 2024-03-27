import { useCart } from '../hooks/';
import { CartItem } from '../components/cart-item/cart-item';
import { Container } from '../components/container/container';

const CartPage = () => {
  const { cartItems, clearCart, getTotalCartPrice } = useCart();

  const totalCartPrice = getTotalCartPrice();

  const onPurchase = () => {
    clearCart();
  };

  if (!cartItems.length) {
    return (
      <div className='flex flex-col items-center justify-center '>
        <p className='py-6 text-lg font-semibold tracking-wide'>
          Cart is empty
        </p>
      </div>
    );
  }

  return (
    <div className='py-6'>
      <Container>
        <div className='flex justify-end'>
          <button
            onClick={onPurchase}
            className='rounded-md bg-[#4294FF] px-2 py-1 text-white'
          >
            Purshase
          </button>
        </div>
        <div className='flex flex-col gap-3'>
          {cartItems.map((item) => {
            return <CartItem key={item.book.id} cartItem={item} />;
          })}
        </div>
        <div className='flex justify-end py-4'>
          <p className='font-bold'>
            Total Price, $ {totalCartPrice.toFixed(2)}
          </p>
        </div>
      </Container>
    </div>
  );
};

export { CartPage };
