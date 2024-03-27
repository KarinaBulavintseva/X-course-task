import { TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../hooks/useCart';
import { Cart } from '../../types';

type CartItemProps = {
  cartItem: Cart;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const {
    book: { id, title },
    cartAmount,
    totalPrice,
  } = cartItem;

  const { deleteFromCart } = useCart();

  const onDeleteItem = (id: number) => {
    deleteFromCart(id);
  };

  return (
    <div className='flex items-center gap-10 rounded-md px-5 py-5 shadow-md'>
      <p className='break-words font-semibold'>{title}</p>
      <p>{cartAmount}</p>
      <div className='flex shrink-0 grow items-center justify-end font-semibold'>
        <p className='font-bold'>{totalPrice.toFixed(2)} $</p>
        <button
          className='gap-4 p-1 text-xl font-bold'
          onClick={() => onDeleteItem(id)}
        >
          <TrashIcon className='h-5 w-5' />
        </button>
      </div>
    </div>
  );
};

export { CartItem };
